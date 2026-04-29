---
title: ArrayMatcher
---

# ArrayMatcher

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/route-pattern/src/lib/array-matcher.ts#L8" target="_blank">View Source</a>

## Summary

Matcher implementation that checks patterns in insertion order and sorts matches by specificity.

## Signature

```ts
class ArrayMatcher<data> {
  constructor(options: { ignoreCase?: boolean }): ArrayMatcher<data>;

  // Properties
  ignoreCase: boolean;

  // Methods
  add(pattern: string | RoutePattern<string>, data: data): void;
  match(
    url: string | URL,
    compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number,
  ): Match<string, data> | null;
  matchAll(
    url: string | URL,
    compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number,
  ): Match<string, data>[];
}

```

## Constructor Params

### options

Constructor options

## Properties

### ignoreCase

Whether pathname matching is case-insensitive.

## Methods

### add(pattern: string | RoutePattern<string>, data: data): void

Adds a pattern and associated data to the matcher.

#### pattern

Pattern to register.

#### data

Data returned when the pattern matches.

### match(url: string | URL, compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number): Match<string, data> | null

Returns the best matching pattern for a URL.

#### url

URL to match.

#### compareFn

Specificity comparer used to rank matches.

### matchAll(url: string | URL, compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number): Match<string, data>[]

Returns every pattern that matches a URL.

#### url

URL to match.

#### compareFn

Specificity comparer used to sort matches.