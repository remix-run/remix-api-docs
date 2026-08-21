---
title: afterAll
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L314
---

# afterAll

## Summary

Registers a hook that runs once after **all** tests in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
reverse registration order. Pass `{ timeout, signal }` after the function
to limit how long the hook may run.

## Signature

```ts
function afterAll(fn: LifecycleHookFn, options: HookOptions): void

```

## Parameters

### `fn`

The teardown function to run once after all tests in the suite.

### `options`

Optional timeout and abort signal configuration.