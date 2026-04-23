"""Booth dashboard for the iSoftStone × TiDB × Microsoft AI workshop — May 8 2026, NYC.

This is a pure static-file server. The interactive slide deck is in static/index.html.
We match the shape of stephenlthorn/mem9-demo's booth_dashboard so Stephen's runbook
habits carry over: localhost:7001, served from a single `demo.sh` runner, no network
dependencies once fonts are cached.

The deck itself is deliberately a self-contained HTML/CSS/JS bundle — no templating,
no backend state. That way if the laptop wifi dies mid-workshop, the demo still runs.
"""

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

STATIC_DIR = Path(__file__).parent / "static"

app = FastAPI(
    title="iSoftStone May 8 booth dashboard",
    description="Stephen Thorn · TiDB · NYC · May 8 2026",
    version="1.0.0",
    docs_url=None,   # no /docs — this is a presentation, not an API
    redoc_url=None,
)


@app.get("/healthz")
def healthz() -> dict:
    """Quick sanity check the server is up. Used by demo.sh readiness probe."""
    return {"status": "ok", "event": "isoftstone-may8-2026"}


@app.get("/")
def root() -> FileResponse:
    """Serve the slide deck at the root."""
    return FileResponse(STATIC_DIR / "index.html")


# Mount everything else under /static/* so relative links in index.html resolve.
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
