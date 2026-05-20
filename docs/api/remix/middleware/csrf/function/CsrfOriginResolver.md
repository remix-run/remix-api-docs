---
title: CsrfOriginResolver
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
  ): CsrfOriginResolverResult | Promise<CsrfOriginResolverResult>;
}

```