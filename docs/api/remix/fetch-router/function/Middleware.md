---
title: Middleware
---

# Middleware

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L21" target="_blank">View Source</a>

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