---
title: or
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

## Parameters

### `predicates`

Child predicates.

## Returns

A logical `or` predicate.