---
title: Matcher
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/route-pattern/src/lib/match.ts#L27
---

# Matcher

## Summary

Matcher for a single route pattern.

## Signature

```ts
type Matcher<source> = {
  match(url: string | URL, options: MatchOptions): Match<source, undefined> | null
}

```