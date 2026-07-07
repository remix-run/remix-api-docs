---
title: throws
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L526
---

# throws

## Summary

Asserts that `fn` throws. Optionally validates the thrown error against
`expectedError`, which may be an `Error` constructor, an `Error` instance
(matched by message), a `RegExp` (matched against the error message), a
plain object (each property checked against the error, with `RegExp` values
matching string properties), or a validator function that returns `true`
for a valid error.

## Signature

```ts
function throws(
  fn: () => unknown,
  expectedErrorOrMessage: unknown,
  message: AssertionMessage,
): void;

```

## Example

```ts
assert.throws(() => JSON.parse("invalid"));
assert.throws(() => riskyOp(), SyntaxError);
assert.throws(() => riskyOp(), { code: "ERR_INVALID_ARG_VALUE" });

```

## Parameters

### `fn`

The function expected to throw.

### `expectedErrorOrMessage`

Optional error constructor, instance, RegExp, object, validator, or failure message.

### `message`

Optional failure message when `expectedErrorOrMessage` is an error matcher.