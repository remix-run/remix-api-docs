---
title: after
---

# after

## Summary

Alias for [`afterAll`](/api/remix/test/function/afterAll/) — matches the `node:test` API.

## Signature

```ts
const after: (fn: () => void | Promise<void>) => void;

```

## Parameters

### `fn`

The teardown function to run once after all tests in the suite.