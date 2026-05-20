---
title: InsertManyOperation
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