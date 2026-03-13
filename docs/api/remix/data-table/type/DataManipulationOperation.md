---
title: DataManipulationOperation
---

# DataManipulationOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L138" target="_blank">View Source</a>

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