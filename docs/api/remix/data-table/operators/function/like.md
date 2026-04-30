---
title: like
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L221
---

# like

## Summary

Builds a case-sensitive SQL `LIKE` predicate.

## Signature

```ts
function like<column extends string | ColumnReferenceLike>(
  column: column,
  value: string,
): Predicate<PredicateColumn<column>>;

```

## Params

### `column`

### `value`

Match pattern.

## Returns

A `like` comparison predicate.