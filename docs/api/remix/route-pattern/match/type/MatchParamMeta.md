---
title: MatchParamMeta
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/route-pattern/src/lib/match/types.ts#L14
---

# MatchParamMeta

## Summary

Metadata describing where a matched param appeared in a normalized URL part.

## Signature

```ts
type MatchParamMeta = {
  begin: number
  end: number
  name: string
  type: ':' | '*'
  value: string
}

```