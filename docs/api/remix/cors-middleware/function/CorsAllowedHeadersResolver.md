---
title: CorsAllowedHeadersResolver
---

# CorsAllowedHeadersResolver

<a href="https://github.com/remix-run/remix/blob/main/packages/cors-middleware/src/lib/cors.ts#L43" target="_blank">View Source</a>

## Summary

Resolves the request headers allowed by a preflight request.

## Signature

```ts
interface CorsAllowedHeadersResolver {
  (
    request: Request,
    context: RequestContext,
  ):
    | CorsAllowedHeadersResolverResult
    | Promise<CorsAllowedHeadersResolverResult>;
}

```