---
title: createMatcher
---

# createMatcher

## Summary

Create a matcher for a single route pattern.

## Signature

```ts
function createMatcher<source extends string>(
  pattern: source | RoutePattern<source>,
  options: MatcherOptions,
): Matcher<source>;

```

## Parameters

### `pattern`

The route pattern to match against

### `options`

Options for matching URLs

## Returns

A matcher for the given pattern