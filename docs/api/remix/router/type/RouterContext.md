---
title: RouterContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/fetch-router/src/lib/router.ts#L202
---

# RouterContext

## Summary

Extracts the request-context type handled by a router or route builder.

This is useful when you want to configure `RouterTypes.context` from a router that uses inline
middleware arrays.

## Signature

```ts
type RouterContext<router> = router extends RouteBuilder<infer context> ? context : never

```