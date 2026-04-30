---
title: compare
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/route-pattern/src/lib/specificity.ts#L63
---

# compare

## Summary

Compare two matches by specificity.
Passing to `.sort()` will sort matches from least specific to most specific.

## Signature

```ts
function compare(a: RoutePatternMatch, b: RoutePatternMatch): -1 | 0 | 1;

```

## Params

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

-1 if `a` is less specific, 1 if `a` is more specific, 0 if tied.