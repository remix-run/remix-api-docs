#!/bin/bash

set -x
set -e

if [ -z "$1" ]; then
  echo "Error: TAG_NAME argument required"
  exit 1
fi

TAG_NAME="$1"
DOCS_DIR="../../remix-api-docs/docs"

# Clear prior "latest" build so we don't leave stranded files for removed APIs
rm -f docs/index.html
rm -rf docs/assets
rm -rf docs/api

pushd ../remix/docs
pnpm run docs --tag "${TAG_NAME}"
pnpm run build
pnpm run prerender --all --dir "${DOCS_DIR}"
popd
