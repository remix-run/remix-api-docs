---
title: DropTableOperation
---

# DropTableOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L463" target="_blank">View Source</a>

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