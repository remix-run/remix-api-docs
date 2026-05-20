---
title: createOktaAuthProvider
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

## Parameters

### `options`

Okta issuer and client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.