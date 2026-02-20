---
title: Schema
---

# Schema

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L80" target="_blank">View Source</a>

## Summary

A sync, Standard Schema v1-compatible schema with a small chainable API.

## Signature

```ts
type Schema<input, output> = SyncStandardSchema<input, output> & { ~run: (value: unknown, context: ValidationContext) => ValidationResult<output>; pipe: (checks: Check<output>[]) => Schema<input, output>; refine: (predicate: (value: output) => boolean, message?: string) => Schema<input, output> }
```