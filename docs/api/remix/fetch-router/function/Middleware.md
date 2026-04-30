---
title: Middleware
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/middleware.ts#L90
---

# Middleware

## Summary

Handles a request and optionally delegates to the next middleware or handler.

## Signature

```ts
interface Middleware {
  (
    context: RequestContext<params>,
    next: NextFunction,
  ): void | Response | Promise<void | Response | undefined> | undefined;
}

```