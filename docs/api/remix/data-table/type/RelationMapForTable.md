---
title: RelationMapForTable
---

# RelationMapForTable

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L523" target="_blank">View Source</a>

## Summary

Named relation map for a source table.

## Signature

```ts
type RelationMapForTable<table> = Record<
  string,
  Relation<table, AnyTable, RelationCardinality, any>
>;

```