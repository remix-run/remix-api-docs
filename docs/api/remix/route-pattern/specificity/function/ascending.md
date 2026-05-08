---
title: ascending
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/specificity.ts#L44
---

# ascending

## Summary

Comparator function for sorting matches from least specific to most specific.

## Signature

```ts
function ascending(a: RoutePatternMatch, b: RoutePatternMatch): number;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

negative if `a` is less specific, positive if more specific, 0 if equal