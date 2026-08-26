---
title: OAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L52
---

# OAuthProvider

## Summary

Public shape for an OAuth or OIDC provider used by external auth request handlers.

## Signature

```ts
interface OAuthProvider<_profile, provider, tokens> {
  [oauthProviderTokens]?: (tokens: tokens) => tokens
  name: provider
}

```

## Properties

### `[oauthProviderTokens]`

Preserves the provider-specific token type for external auth helpers.

### `name`

Provider name used for routing, callbacks, and persisted transactions.