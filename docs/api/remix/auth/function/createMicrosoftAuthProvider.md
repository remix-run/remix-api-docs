---
title: createMicrosoftAuthProvider
---

# createMicrosoftAuthProvider

## Summary

Creates a Microsoft identity platform provider backed by the shared OIDC runtime.

## Signature

```ts
function createMicrosoftAuthProvider(
  options: MicrosoftAuthProviderOptions,
): OAuthProvider<MicrosoftAuthProfile, "microsoft", OAuthStandardTokens>;

```

## Parameters

### `options`

Microsoft client settings and optional tenant selection.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.