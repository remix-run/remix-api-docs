---
title: createXAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/x.ts#L63
---

# createXAuthProvider

## Summary

Creates an X auth provider using OAuth 2.0 Authorization Code with PKCE.

## Signature

```ts
function createXAuthProvider(
  options: XAuthProviderOptions,
): OAuthProvider<XAuthProfile, "x", OAuthStandardTokens>;

```

## Parameters

### `options`

X client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.