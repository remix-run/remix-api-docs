---
title: lt
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/data-table/src/lib/operators.ts#L139
---

# lt

## Summary

Builds a less-than predicate.

## Signature

```ts
function lt<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function lt<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```