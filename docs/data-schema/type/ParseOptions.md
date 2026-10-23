---
title: "ParseOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L48"
---

# ParseOptions

## Summary

Options passed to [`parse`](/data-schema/function/parse/) and [`parseSafe`](/data-schema/function/parseSafe/).

This mirrors [`ValidationOptions`](/data-schema/type/ValidationOptions/), but also supports a convenience `abortEarly`
option at the top level.

## Signature

```ts
type ParseOptions = StandardSchemaV1.Options & {
  abortEarly?: boolean
  errorMap?: ErrorMap
  locale?: string
}

```