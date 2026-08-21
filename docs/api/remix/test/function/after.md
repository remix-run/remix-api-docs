---
title: after
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L321
---

# after

## Summary

Alias for [`afterAll`](/api/remix/test/function/afterAll/) — matches the `node:test` API.

## Signature

```ts
const after: (fn: LifecycleHookFn, options: HookOptions) => void
```

## Parameters

### `fn`

The teardown function to run once after all tests in the suite.

### `options`

Optional timeout and abort signal configuration.