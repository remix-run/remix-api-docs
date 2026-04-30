---
title: timestamps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L982
---

# timestamps

## Summary

Convenience helper for standard snake_case timestamp columns.

## Signature

```ts
function timestamps(): Record<
  "created_at" | "updated_at",
  ColumnBuilder<Date | string | number>
>;

```

## Returns

Column-builder map for `created_at`/`updated_at`.