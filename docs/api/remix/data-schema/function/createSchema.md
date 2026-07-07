---
title: createSchema
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L149
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