---
title: notDeepEqual
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L145
---

# notDeepEqual

## Summary

Asserts that `actual` and `expected` are **not** deeply equal.

## Signature

```ts
function notDeepEqual<_value>(
  actual: unknown,
  expected: unknown,
  message: string,
): void;

```

## Example

```ts
assert.notDeepEqual(result, { id: 1, name: 'Alice' })
```

## Params

### `actual`

The value produced by the code under test.

### `expected`

The value that `actual` must not deeply equal.

### `message`

Optional failure message.