---
title: inList
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L183
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

## Params

### `column`

### `values`

Candidate values.

## Returns

An `in` comparison predicate.