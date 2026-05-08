---
title: greaterThan
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/specificity.ts#L22
---

# greaterThan

## Summary

Returns true if match `a` is more specific than match `b`.

## Signature

```ts
function greaterThan(a: RoutePatternMatch, b: RoutePatternMatch): boolean;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

true if `a` is more specific than `b`