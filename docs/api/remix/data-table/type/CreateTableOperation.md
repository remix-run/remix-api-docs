---
title: CreateTableOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L303
---

# CreateTableOperation

## Summary

Operation that creates a new table.

## Signature

```ts
type CreateTableOperation = {
  checks?: CheckConstraint[];
  columns: Record<string, ColumnDefinition>;
  comment?: string;
  foreignKeys?: ForeignKeyConstraint[];
  ifNotExists?: boolean;
  kind: "createTable";
  primaryKey?: PrimaryKeyConstraint;
  table: TableRef;
  uniques?: UniqueConstraint[];
};

```