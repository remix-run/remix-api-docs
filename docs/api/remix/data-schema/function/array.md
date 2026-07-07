---
title: array
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L369
---

# array

## Summary

Create a schema that validates an array by validating each element with `elementSchema`.

## Signature

```ts
function array<input, output>(
  elementSchema: Schema<input, output>,
): Schema<unknown, output[]>;

```

## Parameters

### `elementSchema`

The schema to validate each element

## Returns

A schema that produces an array of validated outputs