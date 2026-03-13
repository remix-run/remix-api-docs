---
title: ParseOptions
---

# ParseOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L48" target="_blank">View Source</a>

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