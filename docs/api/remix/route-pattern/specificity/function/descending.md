---
title: descending
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/specificity.ts#L53
---

# descending

## Summary

Comparator function for sorting matches from most specific to least specific.

## Signature

```ts
function descending(a: RoutePatternMatch, b: RoutePatternMatch): number;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

positive if `a` is less specific, negative if more specific, 0 if equal