---
title: RouteEntry
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L34
---

# RouteEntry

## Summary

The normalized route entry stored in the router matcher.

## Signature

```ts
interface RouteEntry {
  handler: RequestHandler<any>;
  method: RequestMethod | "ANY";
  middleware: AnyMiddleware[] | undefined;
  pattern: RoutePattern<string>;
}

```

## Properties

### `handler`

The handler that runs when this route matches.

### `method`

The request method this route handles, or `ANY` for method-agnostic routes.

### `middleware`

Route-specific middleware that runs before the handler.

### `pattern`

The URL pattern used to match this route.