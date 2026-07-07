---
title: RouterOptions
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L205
---

# RouterOptions

## Summary

Options for creating a router.

## Signature

```ts
interface RouterOptions<context, middleware> {
  defaultHandler?: RequestHandler<MiddlewareContext<middleware, context>>;
  matcher?: MultiMatcher<RouteEntry>;
  middleware?: readonly [middleware];
}

```

## Properties

### `defaultHandler`

The default request handler that runs when no route matches.
Defaults to a 404 `Not Found` response.

### `matcher`

The matcher to use for matching routes.

### `middleware`

Middleware to run for every request handled by this router.

Inline arrays are preferred. Use `createMiddleware()` only when a middleware chain is stored
before it is passed here and its exact tuple type must survive that boundary.