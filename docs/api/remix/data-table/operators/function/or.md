---
title: or
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L310
---

# or

## Summary

Combines predicates with logical `OR`.

## Signature

```ts
function or<column extends string>(
  predicates: Predicate<column>[],
): Predicate<column>;

```

## Params

### `predicates`

Child predicates.

## Returns

A logical `or` predicate.