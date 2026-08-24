---
title: notNull
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/operators.ts#L289
---

# notNull

## Summary

Builds an `IS NOT NULL` predicate.

## Signature

```ts
function notNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>

```

## Returns

A `notNull` predicate.