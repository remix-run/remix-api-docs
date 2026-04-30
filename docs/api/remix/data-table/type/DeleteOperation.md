---
title: DeleteOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L108
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