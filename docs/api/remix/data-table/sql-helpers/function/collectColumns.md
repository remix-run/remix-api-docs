---
title: collectColumns
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/sql-helpers.ts#L51
---

# collectColumns

## Summary

Returns stable column order from the union of keys in the provided rows.

## Signature

```ts
function collectColumns(rows: Record<string, unknown>[]): string[];

```

## Params

### `rows`

Row objects to scan for keys.

## Returns

Deduplicated key list in encounter order.