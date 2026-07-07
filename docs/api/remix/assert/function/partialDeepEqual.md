---
title: partialDeepEqual
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L375
---

# partialDeepEqual

## Summary

Asserts that `actual` contains the partial deep structure in `expected`.

## Signature

```ts
function partialDeepEqual(
  actual: unknown,
  expected: unknown,
  message: AssertionMessage,
): void;

```

## Example

```ts
assert.partialDeepEqual(result, { id: 1 });

```

## Parameters

### `actual`

The value produced by the code under test.

### `expected`

The partial structure that must be present in `actual`.

### `message`

Optional failure message.