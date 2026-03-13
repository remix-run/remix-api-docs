---
title: ColumnDefault
---

# ColumnDefault

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L183" target="_blank">View Source</a>

## Summary

Default value definition for a column.

## Signature

```ts
type ColumnDefault =
  | { kind: "literal"; value: unknown }
  | { kind: "now" }
  | { expression: string; kind: "sql" };

```