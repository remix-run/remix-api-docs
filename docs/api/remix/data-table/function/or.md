---
title: or
---

# or

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L310" target="_blank">View Source</a>

## Summary

Combines predicates with logical `OR`.

## Signature

```ts
function or<column extends string>(
  predicates: Predicate<column>[],
): Predicate<column>;

```

## Params

### predicates

Child predicates.

## Returns

A logical `or` predicate.