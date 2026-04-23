---
title: ApplyMiddleware
---

# ApplyMiddleware

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/middleware.ts#L47" target="_blank">View Source</a>

## Summary

Applies the declared context effect of a single middleware to a request-context type.

## Signature

```ts
type ApplyMiddleware<context, middleware> = ApplyContextTransform<
  context,
  MiddlewareTransform<middleware>
>;

```