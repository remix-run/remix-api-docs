---
title: number
---

# number

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/coerce.ts#L13" target="_blank">View Source</a>

## Summary

Coerce input into a number.

Accepts:
- finite `number` values (excluding `NaN` and `Infinity`)
- strings parsed with `Number(...)` after trimming (must produce finite result)

## Signature

```ts
function number(): Schema<unknown, number>;

```

## Returns

A schema that produces a `number`