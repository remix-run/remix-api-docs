---
title: RemixTestPool
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/config.ts#L72
---

# RemixTestPool

## Summary

Worker pool used by Remix to run server and E2E test files.
`'forks'` (default) uses child processes for stronger isolation; `'threads'`
uses worker threads for projects that prefer lower-overhead startup.

## Signature

```ts
type RemixTestPool = (typeof remixTestPools)[number]

```