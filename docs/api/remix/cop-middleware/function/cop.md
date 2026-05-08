---
title: cop
source: https://github.com/remix-run/remix/blob/main/packages/cop-middleware/src/lib/cop.ts#L143
---

# cop

## Summary

Creates middleware that rejects unsafe cross-origin requests.

## Signature

```ts
function cop(options: CopOptions): Middleware;

```

## Parameters

### `options`

Cross-origin protection options.

## Returns

Middleware that validates request origin headers.