---
title: createMicrosoftAuthProvider
---

# createMicrosoftAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/microsoft.ts#L36" target="_blank">View Source</a>

## Summary

Creates a Microsoft identity platform provider backed by the shared OIDC runtime.

## Signature

```ts
function createMicrosoftAuthProvider(
  options: MicrosoftAuthProviderOptions,
): OAuthProvider<MicrosoftAuthProfile, "microsoft", OAuthStandardTokens>;

```

## Params

### options

Microsoft client settings and optional tenant selection.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.