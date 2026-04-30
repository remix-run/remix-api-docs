---
title: eq
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L79
---

# eq

## Summary

Builds an equality predicate.

## Signature

```ts
function eq<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnInput<`${string}.${string}`>,
>(
  column: left,
  value: right & (right extends `${string}@${string}` ? never : right),
): Predicate<PredicateColumn<left> | PredicateColumn<right>>;

function eq<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>;

```

## Params

### `column`

### `value`