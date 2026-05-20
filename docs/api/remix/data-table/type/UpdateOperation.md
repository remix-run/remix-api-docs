---
title: UpdateOperation
---

# UpdateOperation

## Summary

Canonical update statement shape consumed by adapters.

## Signature

```ts
type UpdateOperation<table> = {
  changes: Record<string, unknown>;
  kind: "update";
  returning?: ReturningSelection;
  table: table;
  where: Predicate[];
};

```