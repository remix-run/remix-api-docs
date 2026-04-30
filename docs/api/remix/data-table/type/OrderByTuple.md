---
title: OrderByTuple
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L217
---

# OrderByTuple

## Summary

Tuple form accepted by `orderBy` for a single table.

## Signature

```ts
type OrderByTuple<table> = [
  column: SingleTableColumn<table>,
  direction?: OrderDirection,
];

```