---
title: "ne"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-table/src/lib/operators.ts#L94"
---

# ne

## Summary

Builds an inequality predicate.

## Signature

```ts
function ne<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnReferenceLike<`${string}.${string}`>,
>(column: left, value: right): Predicate<PredicateColumn<left> | PredicateColumn<right>>

function ne<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>

```