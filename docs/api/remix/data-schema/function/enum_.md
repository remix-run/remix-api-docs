---
title: enum_
---

# enum_

<a href="https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L459" target="_blank">View Source</a>

## Summary

Create a schema that accepts one of the given values using strict equality (`===`).

## Signature

```ts
function enum_<values extends readonly [unknown, unknown]>(
  values: values,
): Schema<unknown, values[number]>;

```

## Params

### values

## Returns

A schema that produces the union of allowed value types