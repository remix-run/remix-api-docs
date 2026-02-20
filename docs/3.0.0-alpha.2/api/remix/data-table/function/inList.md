---
title: inList
---

# inList

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L180" target="_blank">View Source</a>

## Summary

Builds an `IN` predicate.

## Signature

```ts
function inList(
  column: column,
  values: readonly unknown[],
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### values

Candidate values.

## Returns

An `in` comparison predicate.