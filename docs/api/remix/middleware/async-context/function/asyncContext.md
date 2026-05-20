---
title: asyncContext
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