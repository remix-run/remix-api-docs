---
title: ilike
---

# ilike

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L237" target="_blank">View Source</a>

## Summary

Builds a case-insensitive SQL `LIKE` predicate.

## Signature

```ts
function ilike(
  column: column,
  value: string,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### value

Match pattern.

## Returns

An `ilike` comparison predicate.