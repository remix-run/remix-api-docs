---
title: quoteLiteral
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/sql-helpers.ts#L98
---

# quoteLiteral

## Summary

Converts a JavaScript value into a SQL literal string.

## Signature

```ts
function quoteLiteral(value: unknown, options: { booleansAsIntegers?: boolean }): string

```

## Parameters

### `value`

Value to serialize.

### `options`

Serialization options.

## Returns

SQL literal text.