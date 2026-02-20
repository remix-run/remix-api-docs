---
title: timestampSchema
---

# timestampSchema

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/table.ts#L637" target="_blank">View Source</a>

## Summary

Creates a schema that accepts `Date`, string, and numeric timestamp inputs.

## Signature

```ts
function timestampSchema(): Schema<unknown, string | number | Date>;

```

## Returns

Timestamp schema for generated timestamp helpers.