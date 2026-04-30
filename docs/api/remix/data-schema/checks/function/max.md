---
title: max
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/checks.ts#L95
---

# max

## Summary

Require a number to be less than or equal to `limit`.

## Signature

```ts
function max(limit: number): Check<number>;

```

## Params

### `limit`

The inclusive maximum value

## Returns

A [`Check`](/api/remix/data-schema/type/Check/) that enforces the upper bound