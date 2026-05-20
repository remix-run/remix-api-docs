---
title: UpsertOperation
---

# UpsertOperation

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