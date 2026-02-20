---
title: RouterOptions
---

# RouterOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/router.ts#L45" target="_blank">View Source</a>

## Summary

Options for creating a router.

## Signature

```ts
interface RouterOptions {
  defaultHandler?: RequestHandler<RequestMethod | "ANY", {}>;
  matcher?: Matcher<MatchData>;
  middleware?: Middleware<RequestMethod | "ANY", {}>[];
}

```

## Properties

### defaultHandler

The default request handler that runs when no route matches.

### matcher

The matcher to use for matching routes.

### middleware

Global middleware to run for all routes. This middleware runs on every request before any
routes are matched.