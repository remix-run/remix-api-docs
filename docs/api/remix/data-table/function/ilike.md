---
title: ilike
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L240
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

## Params

### `column`

### `value`

Match pattern.

## Returns

An `ilike` comparison predicate.