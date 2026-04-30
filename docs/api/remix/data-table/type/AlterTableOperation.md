---
title: AlterTableOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L444
---

# AlterTableOperation

## Summary

Operation that applies one or more table changes.

## Signature

```ts
type AlterTableOperation = {
  changes: AlterTableChange[];
  ifExists?: boolean;
  kind: "alterTable";
  table: TableRef;
};

```