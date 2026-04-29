---
title: notNull
---

# notNull

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/operators.ts#L289" target="_blank">View Source</a>

## Summary

Builds an `IS NOT NULL` predicate.

## Signature

```ts
function notNull<column extends string | ColumnReferenceLike>(
  column: column,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

## Returns

A `notNull` predicate.