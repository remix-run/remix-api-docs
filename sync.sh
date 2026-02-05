#!/bin/bash

REMIX_REPO_DIR="../remix"
REMIX_DOCS_DIR="docs/site"

set -x

if [ ! -d ${REMIX_REPO_DIR} ]; then
  echo "Error: ${REMIX_REPO_DIR} directory does not exist"
  exit 1
fi

pushd ${REMIX_REPO_DIR}
pnpm install --frozen-lockfile

pushd docs
pnpm run docs
pnpm run prerender

popd # pop to remix
popd # pop to remix-api-docs

rm -rf docs/
mkdir docs
cp -r ${REMIX_REPO_DIR}/${REMIX_DOCS_DIR}/* docs/

set +x
