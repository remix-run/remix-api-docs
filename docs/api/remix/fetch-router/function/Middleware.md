---
title: Middleware
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L83
---

# Middleware

## Summary

Handles a request and optionally delegates to the next middleware or handler.

## Signature

```ts
interface Middleware {
  (
    context: RequestContext<any>,
    next: NextFunction,
  ): void | Response | Promise<void | Response | undefined> | undefined;
}

```