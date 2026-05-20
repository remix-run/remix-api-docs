---
title: DataManipulationResult
---

# DataManipulationResult

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