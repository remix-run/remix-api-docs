---
title: Match
---

# Match

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/route-pattern/src/lib/matcher.ts#L6" target="_blank">View Source</a>

## Summary

Successful pattern match paired with matcher-specific data.

## Signature

```ts
type Match<source, data> = RoutePatternMatch<source> & { data: data };

```