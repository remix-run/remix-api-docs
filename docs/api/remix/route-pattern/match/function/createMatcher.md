---
title: createMatcher
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match.ts#L30
---

# createMatcher

## Summary

Create a matcher for a single route pattern.

## Signature

```ts
function createMatcher<source extends string>(
  pattern: source | RoutePattern<source>,
  options: MatcherOptions,
): Matcher<source>

```

## Parameters

### `pattern`

The route pattern to match against

### `options`

Options for matching URLs

## Returns

A matcher for the given pattern