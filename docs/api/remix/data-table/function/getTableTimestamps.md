---
title: getTableTimestamps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L486
---

# getTableTimestamps

## Summary

Returns a table's resolved timestamp configuration.

## Signature

```ts
function getTableTimestamps<table extends AnyTable>(
  table: table,
): TableTimestamps<table>;

```

## Params

### `table`

## Returns

Timestamp configuration or `null`.