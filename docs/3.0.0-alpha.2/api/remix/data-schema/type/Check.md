---
title: Check
---

# Check

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L70" target="_blank">View Source</a>

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