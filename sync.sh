#!/bin/bash

set -x
set -e

if [ -z "$1" ]; then
  echo "Error: TAG_NAME argument required"
  exit 1
fi

TAG_NAME="$1"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="${REPO_ROOT}/docs"

# Clear the prior "latest" build so we don't leave stranded files for removed APIs.
# Pages live in one top-level folder per package, so clear everything except the
# Pages config files and versioned snapshots (v1.2.3/).
find "${DOCS_DIR}" -mindepth 1 -maxdepth 1 \
  ! -name CNAME ! -name .nojekyll ! -name 'v[0-9]*' \
  -exec rm -rf {} +

pushd "${REPO_ROOT}/../remix/docs/api"
pnpm run docs --tag "${TAG_NAME}"
pnpm run build
pnpm run prerender --dir "${DOCS_DIR}"
popd
