---
title: gte
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