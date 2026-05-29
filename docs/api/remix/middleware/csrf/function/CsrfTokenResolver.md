---
title: CsrfTokenResolver
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/csrf-middleware/src/lib/csrf.ts#L52
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