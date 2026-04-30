---
title: ErrorMapContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L26
---

# ErrorMapContext

## Summary

Context passed to `errorMap` to customize issue messages.

## Signature

```ts
type ErrorMapContext = {
  code: string;
  defaultMessage: string;
  input: unknown;
  locale?: string;
  path?: Issue["path"];
  values?: Record<string, unknown>;
};

```