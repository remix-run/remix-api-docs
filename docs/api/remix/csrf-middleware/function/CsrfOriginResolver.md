---
title: CsrfOriginResolver
source: https://github.com/remix-run/remix/blob/main/packages/csrf-middleware/src/lib/csrf.ts#L21
---

# CsrfOriginResolver

## Summary

Resolves whether an unsafe request origin should be trusted.

## Signature

```ts
interface CsrfOriginResolver {
  (
    origin: string,
    context: RequestContext,
  ): CsrfOriginResolverResult | Promise<CsrfOriginResolverResult>;
}

```