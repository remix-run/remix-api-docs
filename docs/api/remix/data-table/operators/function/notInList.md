---
title: notInList
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L202
---

# notInList

## Summary

Builds a `NOT IN` predicate.

## Signature

```ts
function notInList<column extends string | ColumnReferenceLike>(
  column: column,
  values: readonly unknown[],
): Predicate<PredicateColumn<column>>;

```

## Parameters

### `column`

### `values`

Candidate values.

## Returns

A `notIn` comparison predicate.