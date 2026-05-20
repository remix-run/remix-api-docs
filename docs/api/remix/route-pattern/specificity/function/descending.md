---
title: descending
---

# descending

## Summary

Comparator function for sorting matches from most specific to least specific.

## Signature

```ts
function descending(a: Match, b: Match): number;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

positive if `a` is less specific, negative if more specific, 0 if equal