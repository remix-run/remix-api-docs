---
title: notNull
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L289
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

## Params

### `column`

## Returns

A `notNull` predicate.