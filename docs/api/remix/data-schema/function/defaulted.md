---
title: defaulted
---

# defaulted

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-schema/src/lib/schema.ts#L437" target="_blank">View Source</a>

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

### schema

The wrapped schema

### defaultValue

A value or function used to produce the default

## Returns

A schema that produces the default when the input is `undefined`