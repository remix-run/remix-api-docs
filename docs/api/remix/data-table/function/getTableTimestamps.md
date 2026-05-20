---
title: getTableTimestamps
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