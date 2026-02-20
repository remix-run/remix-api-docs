---
title: or
---

# or

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L307" target="_blank">View Source</a>

## Summary

Combines predicates with logical `OR`.

## Signature

```ts
function or(predicates: Predicate<column>[]): Predicate<column>;

```

## Params

### predicates

Child predicates.

## Returns

A logical `or` predicate.