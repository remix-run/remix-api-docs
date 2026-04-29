---
title: MiddlewareContext
---

# MiddlewareContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/middleware.ts#L69" target="_blank">View Source</a>

## Summary

Resolves the request-context type produced by a router middleware array.

## Signature

```ts
type MiddlewareContext<middleware> = ApplyMiddlewareTuple<
  RequestContext,
  middleware
>;

```