---
title: CsrfTokenResolver
---

# CsrfTokenResolver

## Summary

Resolves the submitted CSRF token for the current request.

## Signature

```ts
interface CsrfTokenResolver {
  (
    context: AnyRequestContext,
  ): CsrfTokenResolverResult | Promise<CsrfTokenResolverResult>;
}

```