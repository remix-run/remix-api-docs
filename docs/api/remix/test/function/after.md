---
title: after
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/test/src/lib/framework.ts#L268
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