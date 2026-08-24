---
title: collectColumns
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/sql-helpers.ts#L30
---

# collectColumns

## Summary

Returns stable column order from the union of keys in the provided rows.

## Signature

```ts
function collectColumns(rows: Record<string, unknown>[]): string[]

```

## Parameters

### `rows`

Row objects to scan for keys.

## Returns

Deduplicated key list in encounter order.