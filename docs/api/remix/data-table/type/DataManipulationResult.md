---
title: DataManipulationResult
---

# DataManipulationResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L587" target="_blank">View Source</a>

## Summary

Adapter data-manipulation result payload.

## Signature

```ts
type DataManipulationResult = {
  affectedRows?: number;
  insertId?: unknown;
  rows?: Record<string, unknown>[];
};

```