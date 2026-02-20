---
title: parseSafe
---

# parseSafe

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L1120" target="_blank">View Source</a>

## Summary

Validate a value without throwing.

## Signature

```ts
function parseSafe(
  schema: StandardSchemaV1<input, output>,
  value: unknown,
  options: ParseOptions,
):
  | { success: true; value: output }
  | { issues: readonly Issue[]; success: false };

```

## Params

### schema

The schema to validate against

### value

The value to validate

### options

Validation options

## Returns

A success result with the value, or a failure result with issues