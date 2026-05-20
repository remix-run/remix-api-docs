---
title: Check
---

# Check

## Summary

A reusable check for use with `schema.pipe(...)`.

## Signature

```ts
type Check<output> = {
  check: (value: output) => boolean;
  code?: string;
  message?: string;
  values?: Record<string, unknown>;
};

```