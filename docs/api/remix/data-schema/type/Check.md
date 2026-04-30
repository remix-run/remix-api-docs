---
title: Check
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L71
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