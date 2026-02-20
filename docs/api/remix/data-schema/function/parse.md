---
title: parse
---

# parse

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L1098" target="_blank">View Source</a>

## Summary

Validate a value and return the typed output or throw a `ValidationError`.

## Signature

```ts
function parse(
  schema: StandardSchemaV1<input, output>,
  value: unknown,
  options: ParseOptions,
): output;

```

## Params

### schema

The schema to validate against

### value

The value to validate

### options

Validation options

## Returns

The validated output value