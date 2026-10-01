---
title: "createSchema"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-schema/src/lib/schema.ts#L155"
---

# createSchema

## Summary

Creates a sync Standard Schema-compatible schema from a validation function.

## Signature

```ts
function createSchema<input, output>(
  validator: (value: unknown, context: ValidationContext) => ValidationResult<output>,
): Schema<input, output>

```

## Parameters

### `validator`

Validator that returns either a parsed value or validation issues.

## Returns

A chainable schema object.