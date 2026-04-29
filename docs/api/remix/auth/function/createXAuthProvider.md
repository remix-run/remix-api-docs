---
title: createXAuthProvider
---

# createXAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/x.ts#L63" target="_blank">View Source</a>

## Summary

Creates an X auth provider using OAuth 2.0 Authorization Code with PKCE.

## Signature

```ts
function createXAuthProvider(
  options: XAuthProviderOptions,
): OAuthProvider<XAuthProfile, "x", OAuthStandardTokens>;

```

## Params

### options

X client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.