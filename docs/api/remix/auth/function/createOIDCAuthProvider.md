---
title: createOIDCAuthProvider
---

# createOIDCAuthProvider

## Summary

Creates an OpenID Connect provider backed by discovery metadata or explicit endpoints.

## Signature

```ts
function createOIDCAuthProvider<
  profile extends OIDCAuthProfile,
  provider extends string,
>(
  options: OIDCAuthProviderOptions<profile, provider>,
): OAuthProvider<profile, provider, OAuthStandardTokens>;

```

## Parameters

### `options`

OIDC settings, client credentials, and optional profile mapping hooks.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.