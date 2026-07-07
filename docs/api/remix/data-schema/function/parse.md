---
title: parse
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L1145
---

# parse

## Summary

Validate a value and return the typed output or throw a [`ValidationError`](/api/remix/data-schema/class/ValidationError/).

## Signature

```ts
function parse<input, output>(
  schema: StandardSchemaV1<input, output>,
  value: unknown,
  options: ParseOptions,
): output;

```

## Parameters

### `schema`

The schema to validate against

### `value`

The value to validate

### `options`

Validation options

## Returns

The validated output value