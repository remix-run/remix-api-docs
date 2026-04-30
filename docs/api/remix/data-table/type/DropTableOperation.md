---
title: DropTableOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L463
---

# DropTableOperation

## Summary

Operation that drops a table.

## Signature

```ts
type DropTableOperation = {
  cascade?: boolean;
  ifExists?: boolean;
  kind: "dropTable";
  table: TableRef;
};

```