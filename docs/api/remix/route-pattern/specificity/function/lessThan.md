---
title: lessThan
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/route-pattern/src/lib/specificity.ts#L11
---

# lessThan

## Summary

Returns true if match `a` is less specific than match `b`.

## Signature

```ts
function lessThan(a: RoutePatternMatch, b: RoutePatternMatch): boolean;

```

## Params

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

true if `a` is less specific than `b`