---
title: notEqual
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L102
---

# notEqual

## Summary

Asserts strict inequality (`!==`) between `actual` and `expected`.

## Signature

```ts
function notEqual<_value>(
  actual: unknown,
  expected: unknown,
  message: string,
): void;

```

## Example

```ts
assert.notEqual(response.status, 404);

```

## Parameters

### `actual`

The value produced by the code under test.

### `expected`

The value that `actual` must not equal.

### `message`

Optional failure message.