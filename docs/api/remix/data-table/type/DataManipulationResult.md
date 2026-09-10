---
title: DataManipulationResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/driver.ts#L271
---

# DataManipulationResult

## Summary

Database data-manipulation result payload.

## Signature

```ts
type DataManipulationResult = {
  affectedRows?: number
  insertId?: unknown
  rows?: Record<string, unknown>[]
}

```