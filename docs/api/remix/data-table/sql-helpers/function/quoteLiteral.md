---
title: quoteLiteral
---

# quoteLiteral

## Summary

Converts a JavaScript value into a SQL literal string.

## Signature

```ts
function quoteLiteral(
  value: unknown,
  options: { booleansAsIntegers?: boolean },
): string;

```

## Parameters

### `value`

Value to serialize.

### `options`

Serialization options.

## Returns

SQL literal text.