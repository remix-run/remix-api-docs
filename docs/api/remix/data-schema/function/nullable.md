---
title: nullable
---

# nullable

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L585" target="_blank">View Source</a>

## Summary

Allow `null` as an input value, short-circuiting validation when `null` is provided.

## Signature

```ts
function nullable(
  schema: Schema<input, output>,
): Schema<input | null, output | null>;

```

## Params

### schema

The wrapped schema

## Returns

A schema that accepts `null` in addition to the wrapped schema