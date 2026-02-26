---
title: createTable
---

# createTable

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/table.ts#L388" target="_blank">View Source</a>

## Summary

Creates a table object with symbol-backed metadata and direct column references.

## Signature

```ts
function createTable(
  options: CreateTableOptions<name, columns, primaryKey>,
): Table<name, columns, NormalizePrimaryKey<columns, primaryKey>>;

```

## Params

### options

Table declaration options.

## Returns

A frozen table object.