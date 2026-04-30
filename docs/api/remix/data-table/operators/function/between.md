---
title: between
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L260
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

## Params

### `column`

### `lower`

Lower bound value.

### `upper`

Upper bound value.

## Returns

A `between` predicate.