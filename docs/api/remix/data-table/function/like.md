---
title: like
---

# like

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L218" target="_blank">View Source</a>

## Summary

Builds a case-sensitive SQL `LIKE` predicate.

## Signature

```ts
function like(
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