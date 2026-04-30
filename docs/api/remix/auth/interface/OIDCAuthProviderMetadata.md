---
title: OIDCAuthProviderMetadata
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/oidc.ts#L20
---

# OIDCAuthProviderMetadata

## Summary

OpenID Connect discovery metadata.

## Signature

```ts
interface OIDCAuthProviderMetadata {
  authorization_endpoint: string;
  claims_supported?: string[];
  code_challenge_methods_supported?: string[];
  end_session_endpoint?: string;
  issuer: string;
  jwks_uri?: string;
  scopes_supported?: string[];
  token_endpoint: string;
  userinfo_endpoint?: string;
}

```

## Properties

### authorization_endpoint

Authorization endpoint used to start the browser login flow.

### claims_supported

Claims advertised by the provider, when available.

### code_challenge_methods_supported

PKCE challenge methods advertised by the provider, when available.

### end_session_endpoint

RP-initiated logout endpoint published by the provider, when available.

### issuer

Issuer identifier for the OIDC provider.

### jwks_uri

JWKS endpoint published by the provider, when available.

### scopes_supported

Scopes advertised by the provider, when available.

### token_endpoint

Token endpoint used to exchange the authorization code.

### userinfo_endpoint

UserInfo endpoint used to load profile claims, when available.