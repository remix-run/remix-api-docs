---
title: and
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L300
---

# and

## Summary

Combines predicates with logical `AND`.

## Signature

```ts
function and<column extends string>(
  predicates: Predicate<column>[],
): Predicate<column>;

```

## Params

### `predicates`

Child predicates.

## Returns

A logical `and` predicate.