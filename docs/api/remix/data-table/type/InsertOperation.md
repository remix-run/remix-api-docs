---
title: InsertOperation
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