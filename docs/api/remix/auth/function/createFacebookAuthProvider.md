---
title: createFacebookAuthProvider
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

## Parameters

### `options`

Facebook OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.