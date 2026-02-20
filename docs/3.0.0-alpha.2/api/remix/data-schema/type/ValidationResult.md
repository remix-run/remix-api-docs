---
title: ValidationResult
---

# ValidationResult

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L16" target="_blank">View Source</a>

## Summary

The result of schema validation.

On success, `value` is present and `issues` is absent. On failure, `issues` is present.

## Signature

```ts
type ValidationResult<output> = StandardSchemaV1.Result<output>;

```