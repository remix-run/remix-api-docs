---
title: greaterThan
---

# greaterThan

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/route-pattern/src/lib/specificity.ts#L21" target="_blank">View Source</a>

## Summary

Returns true if match `a` is more specific than match `b`.

## Signature

```ts
function greaterThan(a: RoutePatternMatch, b: RoutePatternMatch): boolean;

```

## Params

### a

the first match to compare

### b

the second match to compare

## Returns

true if `a` is more specific than `b`