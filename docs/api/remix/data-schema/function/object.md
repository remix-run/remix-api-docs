---
title: object
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L678
---

# object

## Summary

Create a schema that validates an object with a fixed shape.

By default, unknown keys are stripped. You can change this via `options.unknownKeys`.

## Signature

```ts
function object<shape extends ObjectShape>(
  shape: shape,
  options: ObjectOptions,
): Schema<
  unknown,
  { [key in string | number | symbol]: InferOutput<shape[key]> }
>;

```

## Parameters

### `shape`

### `options`

Controls unknown key behavior

## Returns

A schema that produces a typed object matching the shape