---
title: getTableTimestamps
---

# getTableTimestamps

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L486" target="_blank">View Source</a>

## Summary

Returns a table's resolved timestamp configuration.

## Signature

```ts
function getTableTimestamps<table extends AnyTable>(
  table: table,
): TableTimestamps<table>;

```

## Params

### table

## Returns

Timestamp configuration or `null`.