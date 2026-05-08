---
title: MiddlewareContext
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L45
---

# MiddlewareContext

## Summary

Resolves the request-context type produced by a middleware array.

## Signature

```ts
type MiddlewareContext<middleware, context> =
  number extends middleware["length"]
    ? context
    : middleware extends readonly [
          infer first extends AnyMiddleware,
          ...infer rest extends readonly AnyMiddleware[],
        ]
      ? MiddlewareContext<
          rest,
          ContextWithTransform<context, TransformOf<first>>
        >
      : context;

```