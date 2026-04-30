---
title: defaulted
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L458
---

# defaulted

## Summary

Provide a default when the input is `undefined`.

## Signature

```ts
function defaulted<input, output>(
  schema: Schema<input, output>,
  defaultValue: output | (() => output),
): Schema<input | undefined, output>;

```

## Params

### `schema`

The wrapped schema

### `defaultValue`

A value or function used to produce the default

## Returns

A schema that produces the default when the input is `undefined`