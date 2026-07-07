---
title: createAuth0AuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/auth0.ts#L34
---

# createAuth0AuthProvider

## Summary

Creates an Auth0 provider backed by the shared OIDC runtime.

## Signature

```ts
function createAuth0AuthProvider(
  options: Auth0AuthProviderOptions,
): OAuthProvider<Auth0AuthProfile, "auth0", OAuthStandardTokens>;

```

## Parameters

### `options`

Auth0 domain and client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.