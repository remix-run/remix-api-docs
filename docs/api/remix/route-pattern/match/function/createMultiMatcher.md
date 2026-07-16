---
title: createMultiMatcher
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/match.ts#L66
---

# createMultiMatcher

## Summary

Create a matcher for multiple route patterns.

## Signature

```ts
function createMultiMatcher<data>(options: MatcherOptions): MultiMatcher<data>

```

## Parameters

### `options`

Options for matching URLs

## Returns

A matcher that can register multiple patterns with associated data