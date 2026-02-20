---
title: AdapterResult
---

# AdapterResult

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/adapter.ts#L176" target="_blank">View Source</a>

## Summary

Adapter execution result payload.

## Signature

```ts
type AdapterResult = {
  affectedRows?: number;
  insertId?: unknown;
  rows?: Record<string, unknown>[];
};

```