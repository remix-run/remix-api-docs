---
title: gte
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L133
---

# gte

## Summary

Builds a greater-than-or-equal predicate.

## Signature

```ts
function gte<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnInput<`${string}.${string}`>,
>(
  column: left,
  value: right & (right extends `${string}@${string}` ? never : right),
): Predicate<PredicateColumn<left> | PredicateColumn<right>>;

function gte<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>;

```

## Params

### `column`

### `value`