---
title: NodeHmrWatchOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/node-hmr/src/index.ts#L42
---

# NodeHmrWatchOptions

## Summary

File watching options for a Node HMR runner.

## Signature

```ts
interface NodeHmrWatchOptions {
  ignore?: readonly string[]
  poll?: boolean
  pollInterval?: number
}

```

## Properties

### `ignore`

Ignore matching glob patterns or file paths. Relative values are resolved
from the runner's `cwd`.

### `poll`

Use polling instead of native filesystem events. Defaults to `true` on
Windows and `false` elsewhere.

### `pollInterval`

Polling interval in milliseconds when `poll` is enabled. Defaults to `100`.