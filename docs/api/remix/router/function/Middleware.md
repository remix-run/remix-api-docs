---
title: Middleware
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