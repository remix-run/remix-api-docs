---
title: OrderByTuple
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