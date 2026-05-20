---
title: inList
---

# inList

## Summary

Builds an `IN` predicate.

## Signature

```ts
function inList<column extends string | ColumnReferenceLike>(
  column: column,
  values: readonly unknown[],
): Predicate<PredicateColumn<column>>;

```

## Parameters

### `column`

### `values`

Candidate values.

## Returns

An `in` comparison predicate.