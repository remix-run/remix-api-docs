---
title: ValidationResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L16
---

# ValidationResult

## Summary

The result of schema validation.

On success, `value` is present and `issues` is absent. On failure, `issues` is present.

## Signature

```ts
type ValidationResult<output> = StandardSchemaV1.Result<output>;

```