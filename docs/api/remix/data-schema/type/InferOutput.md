---
title: InferOutput
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L127
---

# InferOutput

## Summary

Infers the output type of a schema-like value.

## Signature

```ts
type InferOutput<schema> =
  schema extends StandardSchemaV1<any, infer output> ? output : never;

```