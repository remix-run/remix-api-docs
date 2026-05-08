---
title: isNull
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L278
---

# isNull

## Summary

Builds an `IS NULL` predicate.

## Signature

```ts
function isNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>;

```

## Returns

An `isNull` predicate.