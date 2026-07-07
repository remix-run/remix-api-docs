---
title: max
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/checks.ts#L95
---

# max

## Summary

Require a number to be less than or equal to `limit`.

## Signature

```ts
function max(limit: number): Check<number>;

```

## Parameters

### `limit`

The inclusive maximum value

## Returns

A [`Check`](/api/remix/data-schema/type/Check/) that enforces the upper bound