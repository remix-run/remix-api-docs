---
title: notInList
---

# notInList

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/operators.ts#L202" target="_blank">View Source</a>

## Summary

Builds a `NOT IN` predicate.

## Signature

```ts
function notInList<column extends string | ColumnReferenceLike>(
  column: column,
  values: readonly unknown[],
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### values

Candidate values.

## Returns

A `notIn` comparison predicate.