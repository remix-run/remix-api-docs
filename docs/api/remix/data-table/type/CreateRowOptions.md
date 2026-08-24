---
title: CreateRowOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/database.ts#L316
---

# CreateRowOptions

## Summary

Options for create operations that return the inserted row.

## Signature

```ts
type CreateRowOptions<table, relations> = {
  returnRow: true
  touch?: boolean
  with?: relations
}

```