#!/bin/bash

set -x
set -e

# Clear prior "latest" build so we don't leave stranded files for removed APIs
rm -f docs/index.html
rm -rf docs/assets
rm -rf docs/api

pushd ../remix/docs
pnpm run docs
pnpm run prerender --all --dir ../../remix-api-docs/docs
popd
