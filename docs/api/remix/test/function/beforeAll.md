---
title: beforeAll
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/test/src/lib/framework.ts#L231
---

# beforeAll

## Summary

Registers a hook that runs once before **all** tests in the current suite
(or globally if called outside a `describe`). Multiple calls are chained in
registration order.

## Signature

```ts
function beforeAll(fn: () => void | Promise<void>): void;

```

## Params

### `fn`

The setup function to run once before all tests in the suite.