---
title: object
---

# object

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L631" target="_blank">View Source</a>

## Summary

Create a schema that validates an object with a fixed shape.

By default, unknown keys are stripped. You can change this via `options.unknownKeys`.

## Signature

```ts
function object(
  shape: shape,
  options: ObjectOptions,
): Schema<
  unknown,
  { [key in string | number | symbol]: InferOutput<shape[key]> }
>;

```

## Params

### shape

### options

Controls unknown key behavior

## Returns

A schema that produces a typed object matching the shape