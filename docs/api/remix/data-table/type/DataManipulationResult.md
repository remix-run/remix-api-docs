---
title: DataManipulationResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/driver.ts#L271
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