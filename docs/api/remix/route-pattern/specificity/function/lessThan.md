---
title: lessThan
---

# lessThan

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/route-pattern/src/lib/specificity.ts#L10" target="_blank">View Source</a>

## Summary

Returns true if match `a` is less specific than match `b`.

## Signature

```ts
function lessThan(a: RoutePatternMatch, b: RoutePatternMatch): boolean;

```

## Params

### a

the first match to compare

### b

the second match to compare

## Returns

true if `a` is less specific than `b`