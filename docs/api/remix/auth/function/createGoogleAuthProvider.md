---
title: createGoogleAuthProvider
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/google.ts#L49
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

## Params

### `options`

Google OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.