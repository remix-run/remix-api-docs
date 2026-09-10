---
title: afterEach
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L288
---

# afterEach

## Summary

Registers a hook that runs after **each** test in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
reverse registration order.  To run logic after a singular test, use
`t.after()` from the [`TestContext`](/api/remix/test/interface/TestContext/). Pass `{ timeout, signal }` after
the function to limit how long the hook may run.

## Signature

```ts
function afterEach(fn: LifecycleHookFn, options: HookOptions): void

```

## Parameters

### `fn`

The teardown function to run after each test.

### `options`

Optional timeout and abort signal configuration.