---
title: rejects
---

# rejects

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L279" target="_blank">View Source</a>

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
```

## Params

### fn

A function returning a promise, or a promise directly.

### expectedError

Optional error constructor, instance, RegExp, or validator.

### message

Optional failure message.