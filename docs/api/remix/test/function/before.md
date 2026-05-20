---
title: before
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/test/src/lib/framework.ts#L266
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