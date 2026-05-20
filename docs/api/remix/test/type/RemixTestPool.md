---
title: RemixTestPool
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/test/src/lib/config.ts#L180
---

# RemixTestPool

## Summary

Worker pool used by `remix-test` to run server and E2E test files.
`'forks'` (default) uses child processes for stronger isolation; `'threads'`
uses worker threads for projects that prefer lower-overhead startup.

## Signature

```ts
type RemixTestPool = "forks" | "threads";

```