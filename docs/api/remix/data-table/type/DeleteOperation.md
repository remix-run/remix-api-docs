---
title: DeleteOperation
---

# DeleteOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L108" target="_blank">View Source</a>

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