---
title: InsertManyOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L87
---

# InsertManyOperation

## Summary

Canonical bulk-insert statement shape consumed by adapters.

## Signature

```ts
type InsertManyOperation<table> = {
  kind: "insertMany";
  returning?: ReturningSelection;
  table: table;
  values: Record<string, unknown>[];
};

```