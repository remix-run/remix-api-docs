---
title: equal
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L81
---

# equal

## Summary

Asserts strict equality (`===`) between `actual` and `expected`.

## Signature

```ts
function equal<T>(
  actual: unknown,
  expected: T,
  message: string,
): asserts actual is T;

```

## Example

```ts
assert.equal(response.status, 200)
```

## Params

### `actual`

The value produced by the code under test.

### `expected`

The value to compare against.

### `message`

Optional failure message.