---
title: OAuthResult
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L69
---

# OAuthResult

## Summary

Normalized result returned by OAuth and OIDC callback handlers.

## Signature

```ts
interface OAuthResult<profile, provider, tokens> {
  account: OAuthAccount<provider>;
  profile: profile;
  provider: provider;
  tokens: tokens;
}

```

## Properties

### `account`

Stable provider-backed account identity for the authenticated user.

### `profile`

Normalized profile data returned by the provider.

### `provider`

Provider name that completed the callback flow.

### `tokens`

Tokens returned by the provider for the completed authorization flow.