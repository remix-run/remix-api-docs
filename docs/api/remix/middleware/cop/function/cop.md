---
title: cop
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