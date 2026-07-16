---
title: Matcher
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match.ts#L18
---

# Matcher

## Summary

Matcher for a single route pattern.

## Signature

```ts
type Matcher<source> = {
  match(url: string | URL): Match<source, undefined> | null
}

```