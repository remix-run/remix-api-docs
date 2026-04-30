---
title: AtmosphereOAuthTokens
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/atmosphere.ts#L118
---

# AtmosphereOAuthTokens

## Summary

DPoP-bound token bundle returned by the built-in Atmosphere auth provider.

## Signature

```ts
interface AtmosphereOAuthTokens {
  accessToken: string;
  authorizationServer: AtmosphereTokenAuthorizationServer;
  did: string;
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

### authorizationServer

Authorization server metadata needed to refresh without account discovery.

### did

DID that the authorization server bound to this token bundle.

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