---
title: descending
---

# descending

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/route-pattern/src/lib/specificity.ts#L52" target="_blank">View Source</a>

## Summary

Comparator function for sorting matches from most specific to least specific.

## Signature

```ts
function descending(a: RoutePatternMatch, b: RoutePatternMatch): number;

```

## Params

### a

the first match to compare

### b

the second match to compare

## Returns

positive if `a` is less specific, negative if more specific, 0 if equal