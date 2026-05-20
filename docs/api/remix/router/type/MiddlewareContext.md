---
title: MiddlewareContext
---

# MiddlewareContext

## Summary

Resolves the request-context type produced by a middleware tuple.

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