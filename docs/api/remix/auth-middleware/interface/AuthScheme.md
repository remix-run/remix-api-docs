---
title: AuthScheme
---

# AuthScheme

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/auth.ts#L105" target="_blank">View Source</a>

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

### name

Stable method name exposed on the resolved auth state.

## Methods

### authenticate(context: RequestContext): AuthSchemeAuthenticateResult<identity> | Promise<AuthSchemeAuthenticateResult<identity>>

Authenticates the current request or returns `null`/`undefined` to skip the scheme.

#### context