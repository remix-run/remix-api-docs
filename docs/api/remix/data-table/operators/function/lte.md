---
title: lte
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/data-table/src/lib/operators.ts#L154
---

# lte

## Summary

Builds a less-than-or-equal predicate.

## Signature

```ts
function lte<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function lte<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```