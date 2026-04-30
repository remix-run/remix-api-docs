---
title: Match
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/route-pattern/src/lib/matcher.ts#L6
---

# Match

## Summary

Successful pattern match paired with matcher-specific data.

## Signature

```ts
type Match<source, data> = RoutePatternMatch<source> & { data: data };

```