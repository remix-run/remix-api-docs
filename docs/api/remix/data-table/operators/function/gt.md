---
title: "gt"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-table/src/lib/operators.ts#L109"
---

# gt

## Summary

Builds a greater-than predicate.

## Signature

```ts
function gt<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function gt<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```