---
title: createGoogleAuthProvider
---

# createGoogleAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/providers/google.ts#L47" target="_blank">View Source</a>

## Summary

Creates a Google auth provider backed by the shared OIDC runtime.

## Signature

```ts
function createGoogleAuthProvider(
  options: GoogleAuthProviderOptions,
): OAuthProvider<GoogleAuthProfile, "google">;

```

## Params

### options

Google OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.