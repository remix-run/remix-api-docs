---
title: gt
---

# gt

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L115" target="_blank">View Source</a>

## Summary

Builds a greater-than predicate.

## Signature

```ts
function gt<
  left extends ColumnInput<`${string}.${string}`>,
  right extends ColumnInput<`${string}.${string}`>,
>(
  column: left,
  value: right & (right extends `${string}@${string}` ? never : right),
): Predicate<PredicateColumn<left> | PredicateColumn<right>>;

function gt<column extends string | ColumnReferenceLike>(
  column: column,
  value: unknown,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### value