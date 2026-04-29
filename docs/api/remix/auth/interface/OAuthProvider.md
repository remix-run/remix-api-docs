---
title: OAuthProvider
---

# OAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/provider.ts#L87" target="_blank">View Source</a>

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

### [oauthProviderTokens]

Phantom token marker used to preserve provider-specific token types.

### name

Provider name used for routing, callbacks, and persisted transactions.