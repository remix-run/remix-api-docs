---
title: createFacebookAuthProvider
---

# createFacebookAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/facebook.ts#L61" target="_blank">View Source</a>

## Summary

Creates a Facebook Login provider.

## Signature

```ts
function createFacebookAuthProvider(
  options: FacebookAuthProviderOptions,
): OAuthProvider<FacebookAuthProfile, "facebook", OAuthStandardTokens>;

```

## Params

### options

Facebook OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.