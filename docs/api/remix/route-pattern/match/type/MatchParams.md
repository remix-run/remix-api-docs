---
title: MatchParams
---

# MatchParams

## Summary

Params extracted from a route pattern match.

## Signature

```ts
type MatchParams<source> = Simplify<Omit<ParseParams<Split<source>>, "*">>;

```