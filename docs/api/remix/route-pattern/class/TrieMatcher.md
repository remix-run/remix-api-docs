---
title: TrieMatcher
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/route-pattern/src/lib/trie-matcher.ts#L19
---

# TrieMatcher

## Summary

Trie-based matcher optimized for repeated route lookups.

## Signature

```ts
class TrieMatcher<data> {
  constructor(options: { ignoreCase?: boolean }): TrieMatcher<data>;

  // Properties
  ignoreCase: boolean;
  trie: Trie<data>;

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

### `options`

Constructor options

## Properties

### `ignoreCase`

Whether pathname matching is case-insensitive.

### `trie`

Trie storage used to index registered patterns.

## Methods

### `add(pattern: string | RoutePattern<string>, data: data): void`

Adds a pattern and associated data to the trie.

#### `pattern`

Pattern to register.

#### `data`

Data returned when the pattern matches.

### `match(url: string | URL, compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number): Match<string, data> | null`

Returns the best matching pattern for a URL.

#### `url`

URL to match.

#### `compareFn`

Specificity comparer used to rank matches.

### `matchAll(url: string | URL, compareFn: (a: RoutePatternMatch, b: RoutePatternMatch) => number): Match<string, data>[]`

Returns every pattern that matches a URL.

#### `url`

URL to match.

#### `compareFn`

Specificity comparer used to sort matches.