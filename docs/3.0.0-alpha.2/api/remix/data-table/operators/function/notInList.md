---
title: notInList
---

# notInList

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L199" target="_blank">View Source</a>

## Summary

Builds a `NOT IN` predicate.

## Signature

```ts
function notInList(
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