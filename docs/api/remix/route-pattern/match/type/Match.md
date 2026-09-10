---
title: Match
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match/types.ts#L32
---

# Match

## Summary

Result returned by route pattern matchers.

## Signature

```ts
type Match<source, data> = {
  data: data
  params: MatchParams<source>
  paramsMeta: { hostname: ReadonlyArray<MatchParamMeta>; pathname: ReadonlyArray<MatchParamMeta> }
  pattern: RoutePattern<source>
  url: URL
}

```