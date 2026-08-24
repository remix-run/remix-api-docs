---
title: CsrfTokenResolver
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/csrf-middleware/src/lib/csrf.ts#L52
---

# CsrfTokenResolver

## Summary

Resolves the submitted CSRF token for the current request.

## Signature

```ts
interface CsrfTokenResolver {
  (context: AnyRequestContext): CsrfTokenResolverResult | Promise<CsrfTokenResolverResult>
}

```