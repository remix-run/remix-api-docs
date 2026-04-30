---
title: MiddlewareContextTransform
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L14
---

# MiddlewareContextTransform

## Summary

The type-level effect a middleware can apply to request context.

## Signature

```ts
type MiddlewareContextTransform =
  | ContextEntries
  | ((context: context) => RequestContext<any, any>);

```