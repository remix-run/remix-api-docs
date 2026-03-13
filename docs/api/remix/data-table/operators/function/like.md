---
title: like
---

# like

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L221" target="_blank">View Source</a>

## Summary

Builds a case-sensitive SQL `LIKE` predicate.

## Signature

```ts
function like<column extends string | ColumnReferenceLike>(
  column: column,
  value: string,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### value

Match pattern.

## Returns

A `like` comparison predicate.