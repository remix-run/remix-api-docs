---
title: ColumnDefault
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/driver.ts#L182
---

# ColumnDefault

## Summary

Default value definition for a column.

## Signature

```ts
type ColumnDefault =
  | { kind: 'literal'; value: unknown }
  | { kind: 'now' }
  | { expression: string; kind: 'sql' }

```