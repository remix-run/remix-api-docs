---
title: MiddlewareContextTransform
---

# MiddlewareContextTransform

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/middleware.ts#L14" target="_blank">View Source</a>

## Summary

The type-level effect a middleware can apply to request context.

## Signature

```ts
type MiddlewareContextTransform =
  | ContextEntries
  | ((context: context) => RequestContext<any, any>);

```