---
title: enum_
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L480
---

# enum_

## Summary

Create a schema that accepts one of the given values using strict equality (`===`).

## Signature

```ts
function enum_<values extends readonly [unknown, unknown]>(
  values: values,
): Schema<unknown, values[number]>;

```

## Params

### `values`

## Returns

A schema that produces the union of allowed value types