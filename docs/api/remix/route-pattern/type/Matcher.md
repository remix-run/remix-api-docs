---
title: Matcher
---

# Matcher

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/route-pattern/src/lib/matcher.ts#L12" target="_blank">View Source</a>

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