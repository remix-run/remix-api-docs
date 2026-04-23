---
title: cop
---

# cop

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/cop-middleware/src/lib/cop.ts#L139" target="_blank">View Source</a>

## Summary

Creates middleware that rejects unsafe cross-origin requests.

## Signature

```ts
function cop(options: CopOptions): Middleware;

```

## Params

### options

Cross-origin protection options.

## Returns

Middleware that validates request origin headers.