---
title: nullable
---

# nullable

## Summary

Allow `null` as an input value, short-circuiting validation when `null` is provided.

## Signature

```ts
function nullable<input, output>(
  schema: Schema<input, output>,
): Schema<input | null, output | null>;

```

## Parameters

### `schema`

The wrapped schema

## Returns

A schema that accepts `null` in addition to the wrapped schema