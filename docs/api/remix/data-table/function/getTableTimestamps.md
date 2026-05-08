---
title: getTableTimestamps
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L486
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

## Returns

Timestamp configuration or `null`.