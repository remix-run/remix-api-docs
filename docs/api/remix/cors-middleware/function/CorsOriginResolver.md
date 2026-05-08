---
title: CorsOriginResolver
source: https://github.com/remix-run/remix/blob/main/packages/cors-middleware/src/lib/cors.ts#L20
---

# CorsOriginResolver

## Summary

Resolves the allowed origin for a request with an `Origin` header.

## Signature

```ts
interface CorsOriginResolver {
  (
    origin: string,
    context: RequestContext,
  ): CorsOriginResolverResult | Promise<CorsOriginResolverResult>;
}

```