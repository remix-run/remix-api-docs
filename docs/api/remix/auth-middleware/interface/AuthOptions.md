---
title: AuthOptions
---

# AuthOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/auth.ts#L125" target="_blank">View Source</a>

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