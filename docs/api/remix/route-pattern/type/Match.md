---
title: Match
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/matcher.ts#L6
---

# Match

## Summary

Successful pattern match paired with matcher-specific data.

## Signature

```ts
type Match<source, data> = RoutePatternMatch<source> & { data: data };

```