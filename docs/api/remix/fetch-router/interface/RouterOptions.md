---
title: RouterOptions
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L63
---

# RouterOptions

## Summary

Options for creating a router.

## Signature

```ts
interface RouterOptions<context, middleware> {
  defaultHandler?: RequestHandler<MiddlewareContext<middleware, context>>;
  matcher?: Matcher<RouteEntry>;
  middleware?: readonly [middleware];
}

```

## Properties

### `defaultHandler`

The default request handler that runs when no route matches.
Defaults to a 404 `Not Found` response.

### `matcher`

The matcher to use for matching routes.
Defaults to `createMatcher()`.

### `middleware`

Middleware to run for every request handled by this router.

Keep this array tuple-typed when you want `MiddlewareContext<typeof middleware>` to preserve
the exact context contributions of each middleware.