![Revisit consent button](https://cdn-cookieyes.com/assets/images/revisit.svg)

![](https://cdn-cookieyes.com/assets/images/close.svg)

We use cookies to enhance your browsing experience. [Read More](https://www.pingcap.com/legal/cookie-policy/)

Manage CookiesAccept All

Customize Consent Preferences![](https://cdn-cookieyes.com/assets/images/close.svg)

We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.

The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site. ... Show more

NecessaryAlways Active

Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.

Functional

Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.

Analytics

Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.

Performance

Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.

Advertisement

Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.

Uncategorized

Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.

Save My PreferencesAccept All

Powered by [![Cookieyes logo](https://cdn-cookieyes.com/assets/images/poweredbtcky.svg)](https://www.cookieyes.com/product/cookie-consent/?ref=cypbcyb&utm_source=cookie-banner&utm_medium=powered-by-cookieyes)

[Millions of agent branches. One database. Join us at TiDB SCaiLE Europe - June 4, 2026.Register Now](https://www.pingcap.com/tidb-scaile-summit/2026-europe/)

[Start for Free](https://tidbcloud.com/free-trial/)

# How Atlassian Scaled to 3M+ Tables: Multi-Tenant Control with TiDB

2025-12-09 [Customer Story](https://www.pingcap.com/blog/?category=customer-stories)

![](https://static.pingcap.com/files/2023/07/06161300/brian-foster-150x150.jpeg)

[Brian Foster](https://www.pingcap.com/blog/author/brian-james-foster/)

Global Content Director

![tidb_feature_1800x600 (1)](<Base64-Image-Removed>)

Atlassian is an enterprise software company that runs one of the world’s largest [SaaS](https://www.pingcap.com/solutions/saas/) platforms. Best known for Jira, Confluence, Trello, and Bitbucket, the company helps teams plan, build, and run software. As tenant counts and compliance demands grew, Atlassian hit the limits of shared and siloed multi-tenancy models on a massive sharded PostgreSQL estate.

At [TiDB SCaiLE 2025](https://www.pingcap.com/tidb-scaile-summit/), Senior Principal Software Engineer Sergey Mineyev detailed how Atlassian re-platformed [Forge](https://developer.atlassian.com/platform/forge/), its plugin ecosystem platform, to [TiDB](https://www.pingcap.com/tidb/) for connection scale, metadata scalability, per-tenant operations (BYOK, residency, PITR), and [zero-downtime upgrades](https://www.pingcap.com/blog/achieving-zero-downtime-upgrades-tidb/). Ultimately, the company collapsed hundreds of PostgreSQL database instances into just 16 global TiDB clusters.

In this blog, we’ll break down Atlassian’s journey to scalable multi-tenancy with TiDB. We’ll explore the key architectural choices, the consolidation to 16 global TiDB clusters, and practical takeaways for any SaaS team wrestling with multi-tenant growth.

Please accept cookies to access this content

## The Challenge: Multi-Tenancy at Atlassian Scale

Atlassian’s growth introduced a uniquely hard dimension: [multi-tenancy at millions of tenants](https://www.pingcap.com/blog/scaling-3-million-tables-how-tidb-powers-atlassian-forge-saas-platform/), each with complex schemas (Jira alone has 800+ tables) and hundreds of third-party plugin schemas. On top of that came enterprise requirements: per-tenant BYOK encryption, data residency moves on request, strict security isolation, and per-tenant restore. The result was an ever-expanding fleet of sharded PostgreSQL clusters, complex bin-packing of tenants, heavyweight connection pooling, and constant hotspot management resulting in high cost and high operational drag.

![Atlassian's original data architecture featuring hundreds of PostgreSQL clusters and complex shard rebalancing.](<Base64-Image-Removed>)_Atlassian’s original data architecture featuring hundreds of PostgreSQL clusters and complex shard rebalancing._

Two standard multi-tenancy models both broke down:

- **Shared-schema** (all tenants in the same tables) simplified operations, but made per-tenant encryption, residency moves, and workload isolation nearly impossible to guarantee within SLAs.
- **Database-per-tenant** made per-tenant operations easy, but created metadata explosion (hundreds of millions of objects) and connection-management limits that traditional engines (Postgres/MySQL) couldn’t sustain—leading to brittle, expensive sharding and rebalancing.

A hybrid “shared for most, silo for the top 1%” approach helped, but at Atlassian scale 1% still meant tens of thousands of databases. Again, this pushed the limits of metadata and connections.

## The Goal: Collapse Instance Sprawl, Keep Per-Tenant Control

Atlassian set a clear target for its plugin platform: **replace ~750+ Postgres clusters** with **~16 global TiDB clusters** (12 regions plus 4 regulated environments). They wanted to retire bespoke sharding and connection pooling, simplify tenant placement, and gain zero-downtime major version upgrades.

Evaluation covered multiple [distributed SQL](https://www.pingcap.com/blog/why-distributed-sql-databases-elevate-modern-app-dev/) engines. According to the keynote, TiDB was the only platform that matched the bin-packing ratio and operational profile Atlassian needed.

## TiDB to the Rescue! Why Distributed SQL Was the Optimal Choice

Here’s how Atlassian unlocked true [multi-tenant scale](https://www.pingcap.com/blog/3-tips-scale-multi-tenant-saas-data-without-pain/) without sharding: distributed SQL let them raise connection ceilings, shed metadata limits, keep per-tenant ops online, and speed up schema changes. Below are the four capabilities that made TiDB the clear choice.

![Atlassian's updated data architecture with TiDB at it core, leading to database consolidation from 750 Postgres clusters to only 16 TiDB clusters.](<Base64-Image-Removed>)_Atlassian’s updated data architecture with TiDB at its core, leading to database consolidation from 750 Postgres clusters to only 16 TiDB clusters._

### 1\. Multi-Master SQL Compute for Massive Connections

TiDB’s [stateless SQL layer](https://www.pingcap.com/blog/3-tips-scale-multi-tenant-saas-data-without-pain/) allows every TiDB server to accept read/write sessions, eliminating the “single writer node” bottleneck. With tuning (e.g., token limits, memory-optimized compute types), Atlassian validated ~500,000 concurrent active connections per cluster in a region. Thread-per-connection engines often struggle to approach these kinds of numbers.

### 2\. Horizontally Scalable Metadata

TiDB stores metadata in the stateless SQL layer and lazily caches only what active queries need. Because most tenants are inactive at any moment, this avoids loading the entire catalog and effectively removes practical metadata ceilings. Upgrades to the metadata cache and startup path cut node initialization from ~20 minutes to ~2 minutes even at extreme catalog sizes. Backup tooling and region sizing were tuned for large catalogs.

### 3\. Per-Tenant Operations without Downtime

The database-per-tenant operating model remains, but is now feasible at scale. Per-tenant encryption, residency moves, and workload/security isolation map cleanly to a database as the unit of operation without the prior fleet sprawl and custom control planes. Major version upgrades run without downtime.

### 4\. Schema Evolution Throughput

Atlassian’s SLO: finish schema changes across the fleet within 24 hours. TiDB’s DDL throughput increased ~6–7× (from ~1,000 DDLs/min to ~6–7k DDLs/min) and foreign-key-related slowdowns were addressed, allowing Atlassian to meet its upgrade SLOs. Further [horizontal scaling](https://www.pingcap.com/horizontal-scaling-vs-vertical-scaling/) of the DDL control plane is possible, but today’s throughput already cleared the critical bar.

## Migration & Operations: From Complex Shards to a Simple Global Footprint

Atlassian migrated the Forge plugin platform first, historically a proving ground that stressed sharded architectures. The new design replaces hundreds of fragmented Postgres clusters with 16 TiDB clusters mapped to regions and regulated environments. The move eliminates most bespoke tenant placement and shard rebalancing logic, reduces connection-pooling complexity, and makes hotspots visible and correctable through standard TiDB controls and observability.

Operationally, the team:

- Tuned TiDB for high-connection density on the compute tier.
- Adjusted region sizing and moderated auto-splitting to manage region count as metadata scaled.
- Adopted the newer metadata cache to speed restarts/rollouts.
- Validated log/snapshot backups at scale after tool improvements for large metadata sets.

## The Results: 3M+ Tables at Scale, Zero Performance Degradation

- **Fleet consolidation:** From hundreds of Postgres instances to **~16 TiDB clusters** globally for the plugin platform.
- **Connection scale:** ~ **500k** concurrent active connections per cluster validated after tuning; successfully tested with **4,000+** schemas across **3M+** tables.
- **Metadata scalability:** Practical removal of prior catalog ceilings; **~2-minute** TiDB node initialization on the largest clusters.
- **Schema velocity:** DDL pipeline throughput **6–7×** higher, enabling **24-hour** fleet-wide schema evolution SLOs.
- **No-downtime upgrades:** Major version changes proceed without maintenance windows.

Atlassian also reports a dramatic improvement in bin-packing ratio, or how many tenants fit per cluster. This enables the desired consolidation and cost reductions while maintaining per-tenant operations.

## What’s Next for Atlassian

With the Forge plugin platform live, Atlassian is onboarding smaller products to TiDB (e.g., Atlas, Loom, and potentially Bitbucket) while also exploring migration paths for flagship products Jira and Confluence. The long-term aim is a unified, globally consistent foundation that preserves per-tenant guarantees without re-introducing fleet sprawl.

## Takeaways for Large SaaS Platform Builders

- **Choose the multi-tenancy model you can operate at scale.** Shared schema simplifies day one but complicates per-tenant obligations; database-per-tenant enables clean operations but demands an engine that can handle connections and metadata at extreme scale.
- **Treat connections and metadata as first-class scaling dimensions.** Multi-master SQL compute and lazy metadata caching change what’s operationally possible.
- **Demand upgrade velocity**. Schema throughput and zero-downtime upgrades are core SLOs when you operate at Atlassian’s tenant count.

As emphasized during this talk, distributed SQL at global scale isn’t just about higher QPS. It’s about making per-tenant guarantees feasible without recreating the operational cost and complexity of yesterday’s sharded architecture. This is precisely the outcome TiDB enabled in production.

_Want the exact steps Atlassian-style multi-tenancy requires? Check out our [multi-tenancy playbook](https://www.pingcap.com/playbook-noisy-neighbor-multi-tenant-mysql/) to discover how TiDB enforces tenant isolation and kills noisy neighbors without per-tenant silos._

[Explore Playbook](https://www.pingcap.com/playbook-noisy-neighbor-multi-tenant-mysql/)

[Atlassian](https://www.pingcap.com/blog?tag=atlassian) [Distributed SQL](https://www.pingcap.com/blog?tag=distributed-sql) [Multi-Tenancy](https://www.pingcap.com/blog?tag=multi-tenancy) [TiDB](https://www.pingcap.com/blog?tag=tidb) [Zero-downtime Upgrade](https://www.pingcap.com/blog?tag=zero-downtime-upgrade)

### Webinar

Effective Multi-Tenancy: Scaling SaaS Over 1 Million Tables in a Single Cluster

[Watch Now](https://www.pingcap.com/event/scaling-saas-over-1-million-tables-in-a-single-cluster/)

Share: [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.pingcap.com%2Fblog%2Fhow-atlassian-scaled-three-million-tables-multi-tenancy-tidb%2F) [Share on Twitter](https://twitter.com/intent/tweet?text=How%20Atlassian%20Scaled%20to%203M%2B%20Tables%3A%20Multi-Tenant%20Control%20with%20TiDB%20%40PingCAP%20https%3A%2F%2Fwww.pingcap.com%2Fblog%2Fhow-atlassian-scaled-three-million-tables-multi-tenancy-tidb%2F) [Share on LinkedIn](https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.pingcap.com%2Fblog%2Fhow-atlassian-scaled-three-million-tables-multi-tenancy-tidb%2F&title=How%20Atlassian%20Scaled%20to%203M%2B%20Tables%3A%20Multi-Tenant%20Control%20with%20TiDB)

## Related Resources

[![Blog - Feature](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**What an AI Harness Actually Needs Beyond a Model**](https://www.pingcap.com/blog/ai-agent-harness/) [![Copy of Blog - Feature](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**TiDB and the Rise of the AI-Native Database**](https://www.pingcap.com/blog/ai-native-database/) [![Webinar - LP Banner](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**What Happens to a Database When the User is an AI agent**](https://www.pingcap.com/blog/what-makes-a-database-for-ai-agents-different/)

[![Blog - Feature](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**What an AI Harness Actually Needs Beyond a Model**](https://www.pingcap.com/blog/ai-agent-harness/)

[![Copy of Blog - Feature](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**TiDB and the Rise of the AI-Native Database**](https://www.pingcap.com/blog/ai-native-database/)

[![Webinar - LP Banner](<Base64-Image-Removed>)\\
\\
Thought Leadership\\
\\
**What Happens to a Database When the User is an AI agent**](https://www.pingcap.com/blog/what-makes-a-database-for-ai-agents-different/)

[View All](https://www.pingcap.com/blog/)

### Have questions? Let us know how we can help.

[Contact Us](https://www.pingcap.com/contact-us/)

## TiDB Cloud Dedicated

A fully-managed cloud DBaaS for predictable workloads

[Sign Up](https://tidbcloud.com/signup/?signup_source=pingcap-en-dedicated) [Learn More](https://www.pingcap.com/tidb-cloud-dedicated/)

## TiDB Cloud Starter

A fully-managed cloud DBaaS for auto-scaling workloads

[Start for Free](https://tidbcloud.com/free-trial/) [Learn More](https://www.pingcap.com/tidb-cloud-starter/)

Please accept cookies to access this content

reCAPTCHA

Select all images with **crosswalks** Click verify once there are none left.

|     |     |     |
| --- | --- | --- |
| ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) |
| ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) |
| ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) | ![](https://www.google.com/recaptcha/enterprise/payload?p=06AFcWeA63fjPwro-FnFcBDpvpekEfrHpqIWeRVt49TPPfDPbVSEaffEbyZmjxOWdDw8FjSmlT1Cu6ROuvOlpjJFRpzNNQajol0WhXLJ2kDD6tRv0NZD0UOAeApFnm6TrY9R3j5cnsADY4ZqJPh0rAzNa9heeu_X13uKrN7lSR0DYWPa0UBB24WpppQrx9YkeGMU3UFvWkbS9xZCUwP5v1Xt4pssDd_hdIvw&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm) |

Please try again.

Please select all matching images.

Please also check the new images.

Please select around the object, or reload if there are none.

Verify