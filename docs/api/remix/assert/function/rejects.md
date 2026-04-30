---
title: rejects
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/assert/src/lib/assert.ts#L287
---

# rejects

## Summary

Asserts that the promise returned by `fn` (or the promise itself) rejects.
Accepts the same `expectedError` shapes as throws.

## Signature

```ts
function rejects(
  fn: (() => Promise<any>) | Promise<any>,
  expectedError: any,
  message: string,
): Promise<void>;

```

## Example

```ts
await assert.rejects(fetch('/missing'), (err) => err.status === 404)
await assert.rejects(fetch('/missing'), { code: 'ERR_INVALID_ARG_VALUE' })
```

## Params

### `fn`

A function returning a promise, or a promise directly.

### `expectedError`

Optional error constructor, instance, RegExp, object, or validator.

### `message`

Optional failure message.