---
title: between
---

# between

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L257" target="_blank">View Source</a>

## Summary

Builds a `BETWEEN` predicate.

## Signature

```ts
function between(
  column: column,
  lower: unknown,
  upper: unknown,
): Predicate<PredicateColumn<column>>;

```

## Params

### column

### lower

Lower bound value.

### upper

Upper bound value.

## Returns

A `between` predicate.