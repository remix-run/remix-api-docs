---
title: OAuthProvider
---

# OAuthProvider

## Summary

Public shape for an OAuth or OIDC provider used by external auth request handlers.

## Signature

```ts
interface OAuthProvider<_profile, provider, tokens> {
  [oauthProviderTokens]?: (tokens: tokens) => tokens;
  name: provider;
}

```

## Properties

### `[oauthProviderTokens]`

Phantom token marker used to preserve provider-specific token types.

### `name`

Provider name used for routing, callbacks, and persisted transactions.