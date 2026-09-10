---
title: getRoutePatternCaptures
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/route-pattern.ts#L145
---

# getRoutePatternCaptures

## Summary

Returns the hostname and pathname captures in a pattern in source order without exposing parsed
pattern internals.

## Signature

```ts
function getRoutePatternCaptures(pattern: RoutePattern): readonly RoutePatternCapture[]

```

## Parameters

### `pattern`

The route pattern to inspect.

## Returns

Metadata for each variable and wildcard in the pattern.