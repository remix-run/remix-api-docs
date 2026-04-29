---
title: createOIDCAuthProvider
---

# createOIDCAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/oidc.ts#L127" target="_blank">View Source</a>

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

## Params

### options

OIDC settings, client credentials, and optional profile mapping hooks.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.