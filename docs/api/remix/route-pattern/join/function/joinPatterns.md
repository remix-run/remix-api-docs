---
title: joinPatterns
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/join.ts#L16
---

# joinPatterns

## Summary

Join two route patterns.

Origin parts (`protocol`, `hostname`, `port`) from `next` override `base` when present.
Pathnames are concatenated with a separator inserted between them as needed.
Search constraints from both patterns are merged.

## Signature

```ts
function joinPatterns<base extends string, next extends string>(
  base: base | RoutePattern<base>,
  next: next | RoutePattern<next>,
): RoutePattern<JoinPatterns<base, next>>

```

## Returns

The joined route pattern.