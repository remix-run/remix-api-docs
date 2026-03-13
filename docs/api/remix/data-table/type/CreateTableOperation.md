---
title: CreateTableOperation
---

# CreateTableOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L303" target="_blank">View Source</a>

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