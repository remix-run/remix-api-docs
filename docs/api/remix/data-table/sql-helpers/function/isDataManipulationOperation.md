---
title: isDataManipulationOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/sql-helpers.ts#L13
---

# isDataManipulationOperation

## Summary

Type guard that narrows an operation to the data-manipulation union.

## Signature

```ts
function isDataManipulationOperation(
  operation:
    | SelectOperation<AnyTable>
    | CountOperation<AnyTable>
    | ExistsOperation<AnyTable>
    | InsertOperation<AnyTable>
    | InsertManyOperation<AnyTable>
    | UpdateOperation<AnyTable>
    | DeleteOperation<AnyTable>
    | UpsertOperation<AnyTable>
    | RawOperation
    | CreateTableOperation
    | AlterTableOperation
    | RenameTableOperation
    | DropTableOperation
    | CreateIndexOperation
    | DropIndexOperation
    | RenameIndexOperation
    | AddForeignKeyOperation
    | DropForeignKeyOperation
    | AddCheckOperation
    | DropCheckOperation,
): operation is DataManipulationOperation;

```

## Params

### `operation`

Operation to inspect.

## Returns

`true` when the operation is a data-manipulation operation.