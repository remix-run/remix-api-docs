---
title: optional
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L760
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

## Params

### `schema`

The wrapped schema

## Returns

A schema that accepts `undefined` in addition to the wrapped schema