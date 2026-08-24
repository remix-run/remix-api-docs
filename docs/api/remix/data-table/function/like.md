---
title: like
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/operators.ts#L221
---

# like

## Summary

Builds a case-sensitive SQL `LIKE` predicate.

## Signature

```ts
function like<column extends string | ColumnReferenceLike>(
  column: column,
  value: string,
): Predicate<PredicateColumn<column>>

```

## Parameters

### `column`

### `value`

Match pattern.

## Returns

A `like` comparison predicate.