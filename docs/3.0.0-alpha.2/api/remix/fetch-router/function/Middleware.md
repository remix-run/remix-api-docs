---
title: Middleware
---

# Middleware

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/middleware.ts#L18" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface Middleware {
  (
    context: RequestContext<method, params>,
    next: NextFunction,
  ): void | Response | Promise<void | Response | undefined> | undefined;
}

```

## Params

### context

The request context

### next

A function that invokes the next middleware or handler in the chain

## Returns

A response to short-circuit the chain, or `undefined`/`void` to continue