---
title: array
---

# array

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L322" target="_blank">View Source</a>

## Summary

Create a schema that validates an array by validating each element with `elementSchema`.

## Signature

```ts
function array(elementSchema: Schema<input, output>): Schema<unknown, output[]>;

```

## Params

### elementSchema

The schema to validate each element

## Returns

A schema that produces an array of validated outputs