---
title: InsertManyOperation
---

# InsertManyOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L87" target="_blank">View Source</a>

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