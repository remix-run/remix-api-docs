---
title: "notNull"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-table/src/lib/operators.ts#L274"
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