---
title: CorsOriginResolver
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