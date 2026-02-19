---
title: min
---

# min

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/checks.ts#L78" target="_blank">View Source</a>

## Summary

Require a number to be greater than or equal to `limit`.

## Signature

```ts
function min(limit: number): Check<number>;

```

## Params

### limit

The inclusive minimum value

## Returns

A `Check` that enforces the lower bound