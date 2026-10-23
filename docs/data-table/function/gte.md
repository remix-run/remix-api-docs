---
title: "gte"
source: "https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L124"
---

# gte

## Summary

Builds a greater-than-or-equal predicate.

## Signature

```ts
function gte<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function gte<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```