---
title: and
---

# and

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L300" target="_blank">View Source</a>

## Summary

Combines predicates with logical `AND`.

## Signature

```ts
function and<column extends string>(
  predicates: Predicate<column>[],
): Predicate<column>;

```

## Params

### predicates

Child predicates.

## Returns

A logical `and` predicate.