---
title: between
---

# between

## Summary

Builds a `BETWEEN` predicate.

## Signature

```ts
function between<column extends string | ColumnReferenceLike>(
  column: column,
  lower: unknown,
  upper: unknown,
): Predicate<PredicateColumn<column>>;

```

## Parameters

### `column`

### `lower`

Lower bound value.

### `upper`

Upper bound value.

## Returns

A `between` predicate.