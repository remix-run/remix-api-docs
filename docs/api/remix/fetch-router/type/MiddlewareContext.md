---
title: MiddlewareContext
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L69
---

# MiddlewareContext

## Summary

Resolves the request-context type produced by a router middleware array.

## Signature

```ts
type MiddlewareContext<middleware> = ApplyMiddlewareTuple<
  RequestContext,
  middleware
>;

```