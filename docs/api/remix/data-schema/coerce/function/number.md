---
title: number
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-schema/src/lib/coerce.ts#L13
---

# number

## Summary

Coerce input into a number.

Accepts:
- finite `number` values (excluding `NaN` and `Infinity`)
- strings parsed with `Number(...)` after trimming (must produce finite result)

## Signature

```ts
function number(): Schema<unknown, number>

```

## Returns

A schema that produces a `number`