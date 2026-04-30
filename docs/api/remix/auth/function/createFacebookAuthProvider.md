---
title: createFacebookAuthProvider
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/facebook.ts#L61
---

# createFacebookAuthProvider

## Summary

Creates a Facebook Login provider.

## Signature

```ts
function createFacebookAuthProvider(
  options: FacebookAuthProviderOptions,
): OAuthProvider<FacebookAuthProfile, "facebook", OAuthStandardTokens>;

```

## Params

### `options`

Facebook OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.