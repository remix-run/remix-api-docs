---
title: InsertOperation
---

# InsertOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L77" target="_blank">View Source</a>

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