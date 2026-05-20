---
title: isNull
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