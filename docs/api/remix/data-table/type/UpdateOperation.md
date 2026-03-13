---
title: UpdateOperation
---

# UpdateOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L97" target="_blank">View Source</a>

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