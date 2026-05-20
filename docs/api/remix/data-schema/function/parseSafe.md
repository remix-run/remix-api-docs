---
title: parseSafe
---

# parseSafe

## Summary

Validate a value without throwing.

## Signature

```ts
function parseSafe<input, output>(
  schema: StandardSchemaV1<input, output>,
  value: unknown,
  options: ParseOptions,
):
  | { success: true; value: output }
  | { issues: readonly Issue[]; success: false };

```

## Parameters

### `schema`

The schema to validate against

### `value`

The value to validate

### `options`

Validation options

## Returns

A success result with the value, or a failure result with issues