---
title: before
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L319
---

# before

## Summary

Alias for [`beforeAll`](/api/remix/test/function/beforeAll/) — matches the `node:test` API.

## Signature

```ts
const before: (fn: LifecycleHookFn, options: HookOptions) => void;

```

## Parameters

### `fn`

The setup function to run once before all tests in the suite.

### `options`

Optional timeout and abort signal configuration.