---
title: ErrorMapContext
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