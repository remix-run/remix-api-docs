---
title: quoteLiteral
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/sql-helpers.ts#L119
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

## Params

### `value`

Value to serialize.

### `options`

Serialization options.

## Returns

SQL literal text.