---
title: max
---

# max

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/checks.ts#L95" target="_blank">View Source</a>

## Summary

Require a number to be less than or equal to `limit`.

## Signature

```ts
function max(limit: number): Check<number>;

```

## Params

### limit

The inclusive maximum value

## Returns

A `Check` that enforces the upper bound