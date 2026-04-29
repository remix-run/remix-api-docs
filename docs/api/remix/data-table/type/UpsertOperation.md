---
title: UpsertOperation
---

# UpsertOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L118" target="_blank">View Source</a>

## Summary

Canonical upsert statement shape consumed by adapters.

## Signature

```ts
type UpsertOperation<table> = {
  conflictTarget?: string[];
  kind: "upsert";
  returning?: ReturningSelection;
  table: table;
  update?: Record<string, unknown>;
  values: Record<string, unknown>;
};

```