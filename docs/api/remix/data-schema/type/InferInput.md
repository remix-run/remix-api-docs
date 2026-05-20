---
title: InferInput
---

# InferInput

## Summary

Infers the input type of a schema-like value.

## Signature

```ts
type InferInput<schema> =
  schema extends StandardSchemaV1<infer input, any> ? input : never;

```