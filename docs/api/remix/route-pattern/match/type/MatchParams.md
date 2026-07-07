---
title: MatchParams
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match/types.ts#L6
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
      : Simplify<Omit<params, "*">>
    : never;

```