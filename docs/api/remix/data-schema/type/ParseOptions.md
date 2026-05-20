---
title: ParseOptions
---

# ParseOptions

## Summary

Options passed to [`parse`](/api/remix/data-schema/function/parse/) and [`parseSafe`](/api/remix/data-schema/function/parseSafe/).

This mirrors [`ValidationOptions`](/api/remix/data-schema/type/ValidationOptions/), but also supports a convenience `abortEarly`
option at the top level.

## Signature

```ts
type ParseOptions = StandardSchemaV1.Options & {
  abortEarly?: boolean;
  errorMap?: ErrorMap;
  locale?: string;
};

```