---
title: throws
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L230
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
function throws(fn: () => any, expectedError: any, message: string): void;

```

## Example

```ts
assert.throws(() => JSON.parse('invalid'))
assert.throws(() => riskyOp(), SyntaxError)
assert.throws(() => riskyOp(), { code: 'ERR_INVALID_ARG_VALUE' })
```

## Params

### `fn`

The function expected to throw.

### `expectedError`

Optional error constructor, instance, RegExp, object, or validator.

### `message`

Optional failure message.