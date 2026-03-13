---
title: CsrfOriginResolver
---

# CsrfOriginResolver

<a href="https://github.com/remix-run/remix/blob/main/packages/csrf-middleware/src/lib/csrf.ts#L21" target="_blank">View Source</a>

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