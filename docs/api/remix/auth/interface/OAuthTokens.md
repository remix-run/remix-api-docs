---
title: OAuthTokens
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L6
---

# OAuthTokens

## Summary

OAuth and OIDC tokens returned from a successful authorization code exchange.

## Signature

```ts
interface OAuthTokens {
  accessToken: string
  expiresAt?: Date
  idToken?: string
  refreshToken?: string
  scope?: string[]
  tokenType?: string
}

```

## Properties

### `accessToken`

Access token returned by the provider.

### `expiresAt`

Expiration time derived from the provider token response, when available.

### `idToken`

OpenID Connect ID token returned by the provider, when available.

### `refreshToken`

Refresh token returned by the provider, when available.

### `scope`

Scopes granted to the current access token, when provided by the provider.

### `tokenType`

Token type returned by the provider, such as `Bearer`.