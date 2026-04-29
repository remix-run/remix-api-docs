---
title: OAuthDpopTokens
---

# OAuthDpopTokens

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/provider.ts#L44" target="_blank">View Source</a>

## Summary

OAuth tokens bound to a DPoP key pair.

## Signature

```ts
interface OAuthDpopTokens {
  accessToken: string;
  dpop: OAuthDpopBinding;
  expiresAt?: Date;
  idToken?: string;
  refreshToken?: string;
  scope?: string[];
  tokenType: "DPoP";
}

```

## Properties

### accessToken

Access token returned by the provider.

### dpop

DPoP binding material returned for DPoP-bound access tokens, when available.

### expiresAt

Expiration time derived from the provider token response, when available.

### idToken

OpenID Connect ID token returned by the provider, when available.

### refreshToken

Refresh token returned by the provider, when available.

### scope

Scopes granted to the current access token, when provided by the provider.

### tokenType

DPoP-bound access tokens always advertise the `DPoP` token type.