---
title: MultiMatcher
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match.ts#L46
---

# MultiMatcher

## Summary

Matcher for a collection of route patterns with optional attached data.

## Signature

```ts
type MultiMatcher<data> = {
  ignoreCase: boolean
  add(pattern: string | RoutePattern<string>, data: data): void
  match(url: string | URL): Match<string, data> | null
  matchAll(url: string | URL): Match<string, data>[]
}

```