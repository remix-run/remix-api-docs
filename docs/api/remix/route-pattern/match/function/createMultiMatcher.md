---
title: createMultiMatcher
---

# createMultiMatcher

## Summary

Create a matcher for multiple route patterns.

## Signature

```ts
function createMultiMatcher<data>(options: MatcherOptions): MultiMatcher<data>;

```

## Parameters

### `options`

Options for matching URLs

## Returns

A matcher that can register multiple patterns with associated data