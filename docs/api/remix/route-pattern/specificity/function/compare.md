---
title: compare
---

# compare

## Summary

Compare two matches by specificity.
Passing to `.sort()` will sort matches from least specific to most specific.

## Signature

```ts
function compare(a: Match, b: Match): -1 | 0 | 1;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

-1 if `a` is less specific, 1 if `a` is more specific, 0 if tied.