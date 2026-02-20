---
title: optional
---

# optional

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L713" target="_blank">View Source</a>

## Summary

Allow `undefined` as an input value, short-circuiting validation when `undefined` is provided.

## Signature

```ts
function optional(
  schema: Schema<input, output>,
): Schema<input | undefined, output | undefined>;

```

## Params

### schema

The wrapped schema

## Returns

A schema that accepts `undefined` in addition to the wrapped schema