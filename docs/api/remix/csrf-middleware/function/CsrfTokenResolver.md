---
title: CsrfTokenResolver
---

# CsrfTokenResolver

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/csrf-middleware/src/lib/csrf.ts#L44" target="_blank">View Source</a>

## Summary

Resolves the submitted CSRF token for the current request.

## Signature

```ts
interface CsrfTokenResolver {
  (
    context: RequestContext,
  ): CsrfTokenResolverResult | Promise<CsrfTokenResolverResult>;
}

```