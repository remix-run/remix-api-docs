---
title: Params
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/route-pattern/src/lib/route-pattern/params.ts#L7
---

# Params

## Summary

Extracted route params for a route-pattern source string.

## Signature

```ts
type Params<source> = Simplify<Omit<ParseParams<Split<source>>, "*">>;

```