---
title: deepEqual
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L124
---

# deepEqual

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
assert.deepEqual(result, { id: 1, name: "Alice" });

```

## Parameters

### `actual`

The value produced by the code under test.

### `expected`

The value to compare against.

### `message`

Optional failure message.