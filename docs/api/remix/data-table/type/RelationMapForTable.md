---
title: RelationMapForTable
---

# RelationMapForTable

## Summary

Named relation map for a source table.

## Signature

```ts
type RelationMapForTable<table> = Record<
  string,
  Relation<table, AnyTable, RelationCardinality, any>
>;

```