---
title: lazy
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/lazy.ts#L12
---

# lazy

## Summary

Create a lazily-evaluated schema.

This is useful for recursive schemas without circular module references.

## Signature

```ts
function lazy<schema extends Schema<any, any>>(
  getSchema: () => schema,
): Schema<InferInput<schema>, InferOutput<schema>>;

```

## Params

### `getSchema`

A function that returns the schema when first needed

## Returns

A schema that delegates validation to the resolved schema