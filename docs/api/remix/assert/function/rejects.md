---
title: rejects
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L648
---

# rejects

## Summary

Asserts that the promise returned by `fn` (or the promise itself) rejects.
Accepts the same `expectedError` shapes as [`throws`](/api/remix/assert/function/throws/).

## Signature

```ts
function rejects(
  fn: (() => Promise<unknown>) | Promise<unknown>,
  expectedErrorOrMessage: unknown,
  message: AssertionMessage,
): Promise<void>;

```

## Example

```ts
await assert.rejects(fetch("/missing"), (err) => err.status === 404);
await assert.rejects(fetch("/missing"), { code: "ERR_INVALID_ARG_VALUE" });

```

## Parameters

### `fn`

A function returning a promise, or a promise directly.

### `expectedErrorOrMessage`

Optional error constructor, instance, RegExp, object, validator, or failure message.

### `message`

Optional failure message when `expectedErrorOrMessage` is an error matcher.