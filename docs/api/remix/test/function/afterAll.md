---
title: afterAll
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/test/src/lib/framework.ts#L243
---

# afterAll

## Summary

Registers a hook that runs once after **all** tests in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
reverse registration order.

## Signature

```ts
function afterAll(fn: () => void | Promise<void>): void;

```

## Params

### `fn`

The teardown function to run once after all tests in the suite.