---
title: OAuthProviderRuntime
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L91
---

# OAuthProviderRuntime

## Summary

Protocol hooks used by an OAuth provider package.

## Signature

```ts
interface OAuthProviderRuntime<profile, provider, tokens> {
  createAuthorizationURL(transaction: OAuthTransaction): URL | Promise<URL>
  handleCallback(
    context: RequestContext,
    transaction: OAuthTransaction,
  ): Promise<OAuthResult<profile, provider, tokens>>
  refreshTokens(tokens: tokens): Promise<tokens>
}

```

## Methods

### `createAuthorizationURL(transaction: OAuthTransaction): URL | Promise<URL>`

Creates the provider authorization URL and may attach opaque provider state to the transaction.



### `handleCallback(context: RequestContext, transaction: OAuthTransaction): Promise<OAuthResult<profile, provider, tokens>>`

Exchanges a valid callback for the normalized provider result.



### `refreshTokens(tokens: tokens): Promise<tokens>`

Refreshes a provider-specific token bundle when the provider supports token refresh.

