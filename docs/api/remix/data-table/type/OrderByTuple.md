---
title: OrderByTuple
---

# OrderByTuple

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/database.ts#L217" target="_blank">View Source</a>

## Summary

Tuple form accepted by `orderBy` for a single table.

## Signature

```ts
type OrderByTuple<table> = [
  column: SingleTableColumn<table>,
  direction?: OrderDirection,
];

```