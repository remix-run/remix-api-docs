---
title: Params
---

# Params

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/route-pattern/src/lib/route-pattern/params.ts#L7" target="_blank">View Source</a>

## Summary

Extracted route params for a route-pattern source string.

## Signature

```ts
type Params<source> = Simplify<Omit<ParseParams<Split<source>>, "*">>;

```