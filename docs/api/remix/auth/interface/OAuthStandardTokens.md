---
title: OAuthStandardTokens
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L34
---

# OAuthStandardTokens

## Summary

OAuth tokens that are not bound to DPoP key material.

## Signature

```ts
interface OAuthStandardTokens {
  accessToken: string;
  dpop?: undefined;
  expiresAt?: Date;
  idToken?: string;
  refreshToken?: string;
  scope?: string[];
  tokenType?: string;
}

```

## Properties

### accessToken

Access token returned by the provider.

### dpop

DPoP binding data is not present for non-DPoP tokens.

### expiresAt

Expiration time derived from the provider token response, when available.

### idToken

OpenID Connect ID token returned by the provider, when available.

### refreshToken

Refresh token returned by the provider, when available.

### scope

Scopes granted to the current access token, when provided by the provider.

### tokenType

Token type returned by the provider, such as `Bearer`.