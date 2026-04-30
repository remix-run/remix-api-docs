---
title: afterEach
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L219
---

# afterEach

## Summary

Registers a hook that runs after **each** test in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
reverse registration order.  To run logic after a singular test, use
`t.after()` from the TestContext

## Signature

```ts
function afterEach(fn: () => void | Promise<void>): void;

```

## Params

### `fn`

The teardown function to run after each test.