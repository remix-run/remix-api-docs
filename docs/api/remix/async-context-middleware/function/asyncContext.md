---
title: asyncContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/async-context-middleware/src/lib/async-context.ts#L21
---

# asyncContext

## Summary

Middleware that stores the request context in `AsyncLocalStorage` so it is available
to all functions in the same async execution context.

## Signature

```ts
function asyncContext(): Middleware;

```

## Returns

A middleware function that stores the request context in `AsyncLocalStorage`