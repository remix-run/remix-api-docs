---
title: RoutePatternMatch
---

# RoutePatternMatch

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/route-pattern/src/lib/route-pattern.ts#L43" target="_blank">View Source</a>

## Summary

Result returned when a URL matches a route pattern.

## Signature

```ts
type RoutePatternMatch<source> = {
  params: Params<source>;
  paramsMeta: { hostname: PartPatternMatch; pathname: PartPatternMatch };
  pattern: RoutePattern;
  url: URL;
};

```