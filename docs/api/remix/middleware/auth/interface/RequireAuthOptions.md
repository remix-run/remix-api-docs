---
title: RequireAuthOptions
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

### `onFailure`

Custom response builder for unauthenticated requests.