---
title: equal
---

# equal

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L77" target="_blank">View Source</a>

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

### actual

The value produced by the code under test.

### expected

The value to compare against.

### message

Optional failure message.