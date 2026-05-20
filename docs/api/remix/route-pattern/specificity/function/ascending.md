---
title: ascending
---

# ascending

## Summary

Comparator function for sorting matches from least specific to most specific.

## Signature

```ts
function ascending(a: Match, b: Match): number;

```

## Parameters

### `a`

the first match to compare

### `b`

the second match to compare

## Returns

negative if `a` is less specific, positive if more specific, 0 if equal