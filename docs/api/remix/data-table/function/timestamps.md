---
title: timestamps
---

# timestamps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/table.ts#L660" target="_blank">View Source</a>

## Summary

Convenience helper for standard snake_case timestamp columns.

## Signature

```ts
function timestamps(
  schema: Schema<any, any>,
): Record<"created_at" | "updated_at", Schema<any, any>>;

```

## Params

### schema

Schema used for both timestamp columns.

## Returns

Column schema map for `created_at`/`updated_at`.