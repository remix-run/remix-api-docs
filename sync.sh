#!/bin/bash

set -x
set -e

if [ -z "$1" ]; then
  echo "Error: TAG_NAME argument required"
  exit 1
fi

TAG_NAME="$1"
VERSION="v${TAG_NAME#remix@}"
DOCS_DIR="../../remix-api-docs/docs"

# Clear prior "latest" build so we don't leave stranded files for removed APIs
rm -rf docs/api
rm -rf docs/assets
rm -rf docs/fragment
rm -f docs/index.html

# Clear the release-specific snapshot so reruns update it deterministically
rm -rf "docs/${VERSION}"

pushd ../remix/docs
pnpm run docs --tag "${TAG_NAME}"
pnpm run build
pnpm run prerender --dir "${DOCS_DIR}"
pnpm run prerender --dir "${DOCS_DIR}" --version "${VERSION}"
popd
