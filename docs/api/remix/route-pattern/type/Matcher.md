---
title: Matcher
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/matcher.ts#L15
---

# Matcher

## Summary

A type for matching URLs against patterns.

## Signature

```ts
type Matcher<data> = {
  ignoreCase: boolean;
  add(pattern: string | RoutePattern<string>, data: data): void;
  match(url: string | URL, compareFn: CompareFn): Match<string, data> | null;
  matchAll(url: string | URL, compareFn: CompareFn): Match<string, data>[];
};

```