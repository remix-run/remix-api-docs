---
title: collectColumns
---

# collectColumns

## Summary

Returns stable column order from the union of keys in the provided rows.

## Signature

```ts
function collectColumns(rows: Record<string, unknown>[]): string[];

```

## Parameters

### `rows`

Row objects to scan for keys.

## Returns

Deduplicated key list in encounter order.