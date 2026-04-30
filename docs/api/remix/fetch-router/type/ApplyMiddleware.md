---
title: ApplyMiddleware
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/middleware.ts#L47
---

# ApplyMiddleware

## Summary

Applies the declared context effect of a single middleware to a request-context type.

## Signature

```ts
type ApplyMiddleware<context, middleware> = ApplyContextTransform<
  context,
  MiddlewareTransform<middleware>
>;

```