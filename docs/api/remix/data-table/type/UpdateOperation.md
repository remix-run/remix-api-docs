---
title: UpdateOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L97
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