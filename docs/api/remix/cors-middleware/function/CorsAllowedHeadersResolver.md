---
title: CorsAllowedHeadersResolver
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/cors-middleware/src/lib/cors.ts#L43
---

# CorsAllowedHeadersResolver

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