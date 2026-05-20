---
title: ColumnDefault
---

# ColumnDefault

## Summary

Default value definition for a column.

## Signature

```ts
type ColumnDefault =
  | { kind: "literal"; value: unknown }
  | { kind: "now" }
  | { expression: string; kind: "sql" };

```