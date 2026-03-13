---
title: InferInput
---

# InferInput

<a href="https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L112" target="_blank">View Source</a>

## Summary

Infers the input type of a schema-like value.

## Signature

```ts
type InferInput<schema> =
  schema extends StandardSchemaV1<infer input, any> ? input : never;

```