---
title: doesNotReject
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L696
---

# doesNotReject

## Summary

Asserts that the promise returned by `fn` does **not** reject.

## Signature

```ts
function doesNotReject(
  fn: Promise<unknown> | (() => Promise<unknown>),
  expectedErrorOrMessage: unknown,
  message: AssertionMessage,
): Promise<void>;

```

## Example

```ts
await assert.doesNotReject(() => fetch("/healthy"));

```

## Parameters

### `fn`

A function returning a promise.

### `expectedErrorOrMessage`

Optional error constructor, instance, RegExp, object, validator, or failure message.

### `message`

Optional failure message when `expectedErrorOrMessage` is an error matcher.