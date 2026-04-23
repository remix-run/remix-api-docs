---
title: isNull
---

# isNull

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/operators.ts#L278" target="_blank">View Source</a>

## Summary

Builds an `IS NULL` predicate.

## Signature

```ts
function isNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

## Returns

An `isNull` predicate.