---
title: CorsOriginResolver
---

# CorsOriginResolver

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/cors-middleware/src/lib/cors.ts#L20" target="_blank">View Source</a>

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