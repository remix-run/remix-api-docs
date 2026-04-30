---
title: ParseOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L48
---

# ParseOptions

## Summary

Options passed to parse and parseSafe.

This mirrors ValidationOptions, but also supports a convenience `abortEarly`
option at the top level.

## Signature

```ts
type ParseOptions = StandardSchemaV1.Options & {
  abortEarly?: boolean;
  errorMap?: ErrorMap;
  locale?: string;
};

```