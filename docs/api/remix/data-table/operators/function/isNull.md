---
title: isNull
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/data-table/src/lib/operators.ts#L281
---

# isNull

## Summary

Builds an `IS NULL` predicate.

## Signature

```ts
function isNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>

```

## Returns

An `isNull` predicate.