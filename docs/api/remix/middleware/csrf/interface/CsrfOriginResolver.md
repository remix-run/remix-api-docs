---
title: CsrfOriginResolver
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/csrf-middleware/src/lib/csrf.ts#L29
---

# CsrfOriginResolver

## Summary

Resolves whether an unsafe request origin should be trusted.

## Signature

```ts
interface CsrfOriginResolver {
  (
    origin: string,
    context: AnyRequestContext,
  ): CsrfOriginResolverResult | Promise<CsrfOriginResolverResult>
}

```