---
title: MultiMatcher
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/route-pattern/src/lib/match.ts#L54
---

# MultiMatcher

## Summary

Matcher for a collection of route patterns with optional attached data.

## Signature

```ts
type MultiMatcher<data> = {
  ignoreCase: boolean
  add(pattern: string | RoutePattern<string>, data: data): void
  match(url: string | URL, options: MatchOptions): Match<string, data> | null
  matchAll(url: string | URL, options: MatchOptions): Match<string, data>[]
}

```