---
title: ilike
---

# ilike

## Summary

Builds a case-insensitive SQL `LIKE` predicate.

## Signature

```ts
function ilike<column extends string | ColumnReferenceLike>(
  column: column,
  value: string,
): Predicate<PredicateColumn<column>>;

```

## Parameters

### `column`

### `value`

Match pattern.

## Returns

An `ilike` comparison predicate.