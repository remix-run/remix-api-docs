---
title: DataManipulationOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L138
---

# DataManipulationOperation

## Summary

Union of all data-manipulation statement shapes.

## Signature

```ts
type DataManipulationOperation =
  | SelectOperation
  | CountOperation
  | ExistsOperation
  | InsertOperation
  | InsertManyOperation
  | UpdateOperation
  | DeleteOperation
  | UpsertOperation
  | RawOperation;

```