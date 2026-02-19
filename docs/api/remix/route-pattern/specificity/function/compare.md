---
title: compare
---

# compare

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/route-pattern/src/lib/specificity.ts#L62" target="_blank">View Source</a>

## Summary

Compare two matches by specificity.
Passing to `.sort()` will sort matches from least specific to most specific.

## Signature

```ts
function compare(a: RoutePatternMatch, b: RoutePatternMatch): -1 | 0 | 1;

```

## Params

### a

the first match to compare

### b

the second match to compare

## Returns

-1 if `a` is less specific, 1 if `a` is more specific, 0 if tied.