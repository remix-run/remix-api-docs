---
title: AlterTableOperation
---

# AlterTableOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L444" target="_blank">View Source</a>

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