---
title: AuthScheme
---

# AuthScheme

## Summary

Authentication scheme contract consumed by `auth()`.

## Signature

```ts
interface AuthScheme<identity> {
  name: string;
  authenticate(
    context: RequestContext,
  ):
    | AuthSchemeAuthenticateResult<identity>
    | Promise<AuthSchemeAuthenticateResult<identity>>;
}

```

## Properties

### `name`

Stable method name exposed on the resolved auth state.

## Methods

### `authenticate(context: RequestContext): AuthSchemeAuthenticateResult<identity> | Promise<AuthSchemeAuthenticateResult<identity>>`

Authenticates the current request or returns `null`/`undefined` to skip the scheme.

