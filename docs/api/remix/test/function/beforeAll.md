---
title: beforeAll
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L301
---

# beforeAll

## Summary

Registers a hook that runs once before **all** tests in the current suite
(or globally if called outside a `describe`). Multiple calls are chained in
registration order. Pass `{ timeout, signal }` after the function to limit
how long the hook may run.

## Signature

```ts
function beforeAll(fn: LifecycleHookFn, options: HookOptions): void

```

## Parameters

### `fn`

The setup function to run once before all tests in the suite.

### `options`

Optional timeout and abort signal configuration.