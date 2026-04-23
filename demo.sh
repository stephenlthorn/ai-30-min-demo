#!/usr/bin/env bash
# isoftstone-may8-demo · booth runner
# -----------------------------------------------------------------
# Serves the slide deck at http://localhost:7001.
# Mirrors the shape of stephenlthorn/mem9-demo's demo.sh so any
# on-booth habits (prev-flight checks, tab order, offline fallback)
# carry straight over.
#
# Modes:
#   ./demo.sh                live run — Python 3.11+, FastAPI, uvicorn
#   ./demo.sh --offline      same thing; this deck has no network deps
#                            once Google Fonts have cached once
#   ./demo.sh --open         also opens the deck in the default browser
#   ./demo.sh --port 8080    override the default port (7001)
#   ./demo.sh --help

set -euo pipefail

PORT="${DECK_PORT:-7001}"
OPEN_BROWSER=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --offline)
      echo "→ offline mode: deck has no backend calls; same behaviour as default"
      shift
      ;;
    --open)
      OPEN_BROWSER=true
      shift
      ;;
    --port)
      PORT="$2"
      shift 2
      ;;
    --help|-h)
      grep '^#' "$0" | sed 's/^# \{0,1\}//' | head -n 16
      exit 0
      ;;
    *)
      echo "unknown arg: $1" >&2
      exit 1
      ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Python check
if ! command -v python3 >/dev/null 2>&1; then
  echo "✗ python3 not found — need Python 3.11+" >&2
  exit 1
fi

PY_VER=$(python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")')
echo "→ python $PY_VER"

# Virtualenv
VENV_DIR=".venv"
if [ ! -d "$VENV_DIR" ]; then
  echo "→ creating .venv (first run)"
  python3 -m venv "$VENV_DIR"
fi

# shellcheck disable=SC1090
source "$VENV_DIR/bin/activate"

# Install deps if missing
if ! python -c "import fastapi, uvicorn" >/dev/null 2>&1; then
  echo "→ installing dependencies (first run)"
  pip install --quiet --upgrade pip
  pip install --quiet -r requirements.txt
fi

# Sanity check — static files exist
if [ ! -f "booth_dashboard/static/index.html" ]; then
  echo "✗ booth_dashboard/static/index.html missing" >&2
  exit 1
fi

# Launch
URL="http://localhost:${PORT}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  iSoftStone × TiDB × Microsoft · May 8 2026 booth"
echo "  Deck serving at: $URL"
echo "  Press Ctrl+C to stop."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ "$OPEN_BROWSER" = true ]; then
  # macOS / Linux
  if command -v open >/dev/null 2>&1; then
    (sleep 1 && open "$URL") &
  elif command -v xdg-open >/dev/null 2>&1; then
    (sleep 1 && xdg-open "$URL") &
  fi
fi

exec python -m uvicorn booth_dashboard.app:app \
  --host 0.0.0.0 \
  --port "$PORT" \
  --log-level warning
