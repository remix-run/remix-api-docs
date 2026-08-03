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

# Clear prior "latest" build so we don't leave stranded files for removed APIs
rm -rf "${DOCS_DIR}/api"
rm -rf "${DOCS_DIR}/assets"
rm -rf "${DOCS_DIR}/fragment"
rm -f "${DOCS_DIR}/index.html"

pushd "${REPO_ROOT}/../remix/docs/api"
pnpm run docs --tag "${TAG_NAME}"
pnpm run build
pnpm run prerender --dir "${DOCS_DIR}"
popd
