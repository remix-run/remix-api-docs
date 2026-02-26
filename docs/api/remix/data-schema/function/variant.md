---
title: variant
---

# variant

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L978" target="_blank">View Source</a>

## Summary

Create a discriminated-union schema.

The returned schema expects an object with a `discriminator` property and selects a variant schema
based on that value.

## Signature

```ts
function variant(
  discriminator: key,
  variants: variants,
): Schema<unknown, InferOutput<variants[keyof variants]>>;

```

## Params

### discriminator

The property name used to select a variant

### variants

## Returns

A schema that produces the selected variant output type