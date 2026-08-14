---
title: Matcher
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/match.ts#L27
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