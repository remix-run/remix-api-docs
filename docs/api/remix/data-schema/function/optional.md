---
title: optional
---

# optional

## Summary

Allow `undefined` as an input value, short-circuiting validation when `undefined` is provided.

## Signature

```ts
function optional<input, output>(
  schema: Schema<input, output>,
): Schema<input | undefined, output | undefined>;

```

## Parameters

### `schema`

The wrapped schema

## Returns

A schema that accepts `undefined` in addition to the wrapped schema