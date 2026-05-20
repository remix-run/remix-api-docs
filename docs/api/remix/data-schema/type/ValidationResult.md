---
title: ValidationResult
---

# ValidationResult

## Summary

The result of schema validation.

On success, `value` is present and `issues` is absent. On failure, `issues` is present.

## Signature

```ts
type ValidationResult<output> = StandardSchemaV1.Result<output>;

```