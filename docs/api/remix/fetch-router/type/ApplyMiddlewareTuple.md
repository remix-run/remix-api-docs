---
title: ApplyMiddlewareTuple
---

# ApplyMiddlewareTuple

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/middleware.ts#L55" target="_blank">View Source</a>

## Summary

Applies an ordered middleware array to a request-context type from left to right.

## Signature

```ts
type ApplyMiddlewareTuple<context, middleware> =
  middleware extends readonly AnyMiddleware[]
    ? number extends middleware["length"]
      ? context
      : middleware extends readonly [infer first, ...infer rest]
        ? ApplyMiddlewareTuple<ApplyMiddleware<context, first>, rest>
        : context
    : context;

```