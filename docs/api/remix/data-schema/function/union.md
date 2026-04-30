---
title: union
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L1081
---

# union

## Summary

Create a schema that tries multiple schemas in order and returns the first success.

When `abortEarly` is disabled (default), issues are collected from all failing variants.

## Signature

```ts
function union<schemas extends Schema<any, any>[]>(
  schemas: schemas,
): Schema<unknown, InferOutput<schemas[number]>>;

```

## Params

### `schemas`

## Returns

A schema that produces the first successful variant output