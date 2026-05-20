---
title: parse
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