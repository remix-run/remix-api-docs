---
title: notNull
---

# notNull

## Summary

Builds an `IS NOT NULL` predicate.

## Signature

```ts
function notNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>;

```

## Returns

A `notNull` predicate.