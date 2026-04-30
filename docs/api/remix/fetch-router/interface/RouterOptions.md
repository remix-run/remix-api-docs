---
title: RouterOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/router.ts#L171
---

# RouterOptions

## Summary

Options for creating a router.

## Signature

```ts
interface RouterOptions<context, middleware> {
  defaultHandler?: RequestHandler<
    ContextParams<ApplyMiddlewareTuple<context, middleware>>,
    ApplyMiddlewareTuple<context, middleware>
  >;
  matcher?: Matcher<RouteMatchData>;
  middleware?: readonly [middleware];
}

```

## Properties

### defaultHandler

The default request handler that runs when no route matches.

### matcher

The matcher to use for matching routes.

### middleware

Middleware to run for every request handled by this router.

Keep this array tuple-typed when you want `MiddlewareContext<typeof middleware>` to preserve
the exact context contributions of each middleware.