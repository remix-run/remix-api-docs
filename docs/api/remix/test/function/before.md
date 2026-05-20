---
title: before
---

# before

## Summary

Alias for [`beforeAll`](/api/remix/test/function/beforeAll/) — matches the `node:test` API.

## Signature

```ts
const before: (fn: () => void | Promise<void>) => void;

```

## Parameters

### `fn`

The setup function to run once before all tests in the suite.