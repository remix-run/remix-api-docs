---
title: InferOutput
---

# InferOutput

## Summary

Infers the output type of a schema-like value.

## Signature

```ts
type InferOutput<schema> =
  schema extends StandardSchemaV1<any, infer output> ? output : never;

```