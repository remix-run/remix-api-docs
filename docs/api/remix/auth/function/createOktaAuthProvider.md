---
title: createOktaAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/okta.ts#L26
---

# createOktaAuthProvider

## Summary

Creates an Okta provider backed by the shared OIDC runtime.

## Signature

```ts
function createOktaAuthProvider(
  options: OktaAuthProviderOptions,
): OAuthProvider<OktaAuthProfile, "okta", OAuthStandardTokens>;

```

## Params

### `options`

Okta issuer and client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.