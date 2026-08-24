---
title: or
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/operators.ts#L310
---

# or

## Summary

Combines predicates with logical `OR`.

## Signature

```ts
function or<column extends string>(predicates: Predicate<column>[]): Predicate<column>

```

## Parameters

### `predicates`

Child predicates.

## Returns

A logical `or` predicate.