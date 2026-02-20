---
title: union
---

# union

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L1034" target="_blank">View Source</a>

## Summary

Create a schema that tries multiple schemas in order and returns the first success.

When `abortEarly` is disabled (default), issues are collected from all failing variants.

## Signature

```ts
function union(schemas: schemas): Schema<unknown, InferOutput<schemas[number]>>;

```

## Params

### schemas

## Returns

A schema that produces the first successful variant output