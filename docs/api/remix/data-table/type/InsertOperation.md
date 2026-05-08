---
title: InsertOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L77
---

# InsertOperation

## Summary

Canonical insert statement shape consumed by adapters.

## Signature

```ts
type InsertOperation<table> = {
  kind: "insert";
  returning?: ReturningSelection;
  table: table;
  values: Record<string, unknown>;
};

```