---
title: deepEqual
---

# deepEqual

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L120" target="_blank">View Source</a>

## Summary

Asserts deep strict equality between `actual` and `expected`. Recursively
compares object properties using `===` at primitive leaves (no type coercion).

## Signature

```ts
function deepEqual<T>(
  actual: unknown,
  expected: T,
  message: string,
): asserts actual is T;

```

## Example

```ts
assert.deepEqual(result, { id: 1, name: 'Alice' })
```

## Params

### actual

The value produced by the code under test.

### expected

The value to compare against.

### message

Optional failure message.