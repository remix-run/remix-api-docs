---
title: MatchParams
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/route-pattern/src/lib/match/types.ts#L6
---

# MatchParams

## Summary

Params extracted from a route pattern match.

## Signature

```ts
type MatchParams<source> =
  ParseParams<source> extends infer params
    ? [params] extends [never]
      ? never
      : Simplify<Omit<params, '*'>>
    : never

```