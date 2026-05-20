---
title: CorsAllowedHeadersResolver
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