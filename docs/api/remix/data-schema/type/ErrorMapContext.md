---
title: ErrorMapContext
---

# ErrorMapContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L26" target="_blank">View Source</a>

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