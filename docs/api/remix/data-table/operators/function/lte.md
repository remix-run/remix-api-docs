---
title: lte
---

# lte

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/operators.ts#L169" target="_blank">View Source</a>

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

## Params

### column

### value