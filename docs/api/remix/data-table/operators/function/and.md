---
title: and
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L300
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

## Parameters

### `predicates`

Child predicates.

## Returns

A logical `and` predicate.