---
title: createGoogleAuthProvider
---

# createGoogleAuthProvider

## Summary

Creates a Google auth provider backed by the shared OIDC runtime.

## Signature

```ts
function createGoogleAuthProvider(
  options: GoogleAuthProviderOptions,
): OAuthProvider<GoogleAuthProfile, "google", OAuthStandardTokens>;

```

## Parameters

### `options`

Google OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.