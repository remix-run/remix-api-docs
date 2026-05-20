---
title: ascending
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/route-pattern/src/lib/specificity.ts#L45
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