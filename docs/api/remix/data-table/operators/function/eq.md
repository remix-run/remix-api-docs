---
title: "eq"
source: "https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L79"
---

# eq

## Summary

Builds an equality predicate.

## Signature

```ts
function eq<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function eq<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```