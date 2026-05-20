---
title: DataManipulationOperation
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