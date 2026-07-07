---
title: doesNotThrow
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L575
---

# doesNotThrow

## Summary

Asserts that `fn` does **not** throw.

## Signature

```ts
function doesNotThrow(
  fn: () => unknown,
  expectedErrorOrMessage: unknown,
  message: AssertionMessage,
): void;

```

## Example

```ts
assert.doesNotThrow(() => JSON.parse("{}"));

```

## Parameters

### `fn`

The function expected not to throw.

### `expectedErrorOrMessage`

Optional error constructor, instance, RegExp, object, validator, or failure message.

### `message`

Optional failure message when `expectedErrorOrMessage` is an error matcher.