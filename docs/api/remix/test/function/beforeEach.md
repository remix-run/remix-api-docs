---
title: beforeEach
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L216
---

# beforeEach

## Summary

Registers a hook that runs before **each** test in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
registration order.

## Signature

```ts
function beforeEach(fn: () => void | Promise<void>): void;

```

## Parameters

### `fn`

The setup function to run before each test.