---
title: InferOutput
---

# InferOutput

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L116" target="_blank">View Source</a>

## Summary

Infers the output type of a schema-like value.

## Signature

```ts
type InferOutput<schema> =
  schema extends StandardSchemaV1<any, infer output> ? output : never;

```