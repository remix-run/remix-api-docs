---
title: lte
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L169
---

# lte

## Summary

Builds a less-than-or-equal predicate.

## Signature

```ts
function lte<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnInput<`${string}.${string}`>,
>(
  column: left,
  value: right & (right extends `${string}@${string}` ? never : right),
): Predicate<PredicateColumn<left> | PredicateColumn<right>>;

function lte<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>;

```