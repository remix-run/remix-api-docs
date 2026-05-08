---
title: ContextWithMiddleware
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L63
---

# ContextWithMiddleware

## Summary

Resolves the request-context type produced by applying middleware to an existing context.

This is useful for router helpers and third-party libraries that need to describe
the context available after a known middleware tuple runs.

## Signature

```ts
type ContextWithMiddleware<context, middleware> = MiddlewareContext<
  middleware,
  context
>;

```