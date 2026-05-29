---
title: MatchParams
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/route-pattern/src/lib/match/types.ts#L7
---

# MatchParams

## Summary

Params extracted from a route pattern match.

## Signature

```ts
type MatchParams<source> = Simplify<Omit<ParseParams<Split<source>>, "*">>;

```