---
title: DeleteOperation
---

# DeleteOperation

## Summary

Canonical delete statement shape consumed by adapters.

## Signature

```ts
type DeleteOperation<table> = {
  kind: "delete";
  returning?: ReturningSelection;
  table: table;
  where: Predicate[];
};

```