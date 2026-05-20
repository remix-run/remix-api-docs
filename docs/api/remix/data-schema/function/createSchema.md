---
title: createSchema
---

# createSchema

## Summary

Creates a sync Standard Schema-compatible schema from a validation function.

## Signature

```ts
function createSchema<input, output>(
  validator: (
    value: unknown,
    context: {
      options?: ParseOptions;
      path: readonly (PropertyKey | PathSegment)[];
    },
  ) => ValidationResult<output>,
): Schema<input, output>;

```

## Parameters

### `validator`

Validator that returns either a parsed value or validation issues.

## Returns

A chainable schema object.