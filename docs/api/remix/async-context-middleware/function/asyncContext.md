---
title: asyncContext
---

# asyncContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/async-context-middleware/src/lib/async-context.ts#L13" target="_blank">View Source</a>

## Summary

Middleware that stores the request context in `AsyncLocalStorage` so it is available
to all functions in the same async execution context.

## Signature

```ts
function asyncContext(): Middleware;

```

## Returns

A middleware function that stores the request context in `AsyncLocalStorage`