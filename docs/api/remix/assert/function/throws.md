---
title: throws
---

# throws

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L223" target="_blank">View Source</a>

## Summary

Asserts that `fn` throws. Optionally validates the thrown error against
`expectedError`, which may be an `Error` constructor, an `Error` instance
(matched by message), a `RegExp` (matched against the error message), or a
validator function that returns `true` for a valid error.

## Signature

```ts
function throws(fn: () => any, expectedError: any, message: string): void;

```

## Example

```ts
assert.throws(() => JSON.parse('invalid'))
assert.throws(() => riskyOp(), SyntaxError)
```

## Params

### fn

The function expected to throw.

### expectedError

Optional error constructor, instance, RegExp, or validator.

### message

Optional failure message.