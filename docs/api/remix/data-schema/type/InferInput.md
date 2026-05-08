---
title: InferInput
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L122
---

# InferInput

## Summary

Infers the input type of a schema-like value.

## Signature

```ts
type InferInput<schema> =
  schema extends StandardSchemaV1<infer input, any> ? input : never;

```