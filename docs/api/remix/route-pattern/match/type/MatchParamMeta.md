---
title: MatchParamMeta
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/match/types.ts#L14
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