---
title: RelationMapForTable
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L523
---

# RelationMapForTable

## Summary

Named relation map for a source table.

## Signature

```ts
type RelationMapForTable<table> = Record<
  string,
  Relation<table, AnyTable, RelationCardinality, any>
>

```