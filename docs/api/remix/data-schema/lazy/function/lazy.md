---
title: lazy
---

# lazy

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/lazy.ts#L12" target="_blank">View Source</a>

## Summary

Create a lazily-evaluated schema.

This is useful for recursive schemas without circular module references.

## Signature

```ts
function lazy(
  getSchema: () => schema,
): Schema<InferInput<schema>, InferOutput<schema>>;

```

## Params

### getSchema

A function that returns the schema when first needed

## Returns

A schema that delegates validation to the resolved schema