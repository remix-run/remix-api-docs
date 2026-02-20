---
title: ascending
---

# ascending

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/route-pattern/src/lib/specificity.ts#L43" target="_blank">View Source</a>

## Summary

Comparator function for sorting matches from least specific to most specific.

## Signature

```ts
function ascending(a: RoutePatternMatch, b: RoutePatternMatch): number;

```

## Params

### a

the first match to compare

### b

the second match to compare

## Returns

negative if `a` is less specific, positive if more specific, 0 if equal