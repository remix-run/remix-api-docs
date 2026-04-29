---
title: RequireAuthOptions
---

# RequireAuthOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/require-auth.ts#L36" target="_blank">View Source</a>

## Summary

Options for enforcing authentication on a route.

## Signature

```ts
interface RequireAuthOptions {
  onFailure?: (
    context: RequestContext,
    auth: BadAuth,
  ) => Response | Promise<Response>;
}

```

## Properties

### onFailure

Custom response builder for unauthenticated requests.