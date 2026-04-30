---
title: AuthOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L125
---

# AuthOptions

## Summary

Options for loading auth state for each request.

## Signature

```ts
interface AuthOptions<schemes> {
  schemes: readonly [schemes];
}

```

## Properties

### schemes

Auth schemes to run in order for each request.