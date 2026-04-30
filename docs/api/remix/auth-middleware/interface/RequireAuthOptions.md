---
title: RequireAuthOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/require-auth.ts#L36
---

# RequireAuthOptions

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