---
title: OIDCAuthProviderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/oidc.ts#L90
---

# OIDCAuthProviderOptions

## Summary

Options for creating a generic OpenID Connect provider.

## Signature

```ts
interface OIDCAuthProviderOptions<profile, provider> {
  authorizationParams?: Record<string, string | undefined>;
  clientId: string;
  clientSecret: string;
  discoveryUrl?: string | URL;
  issuer: string | URL;
  metadata?: OIDCAuthProviderMetadata;
  name?: provider;
  redirectUri: string | URL;
  scopes?: string[];
  mapProfile(input: {
    claims: OIDCAuthProfile;
    context: RequestContext;
    metadata: OIDCAuthProviderMetadata;
    tokens: OAuthTokens;
  }): profile | Promise<profile>;
}

```

## Properties

### authorizationParams

Additional authorization parameters appended to the login redirect.

### clientId

OAuth client identifier for your application.

### clientSecret

OAuth client secret for your application.

### discoveryUrl

Optional override for the discovery document URL.

### issuer

Issuer base URL used for discovery and validation.

### metadata

Optional inline discovery metadata used instead of fetching it.

### name

Provider name exposed in callback results and persisted transactions.

### redirectUri

Callback URL registered with the provider.

### scopes

Requested scopes for the login flow.

## Methods

### mapProfile(input: { claims: OIDCAuthProfile; context: RequestContext; metadata: OIDCAuthProviderMetadata; tokens: OAuthTokens }): profile | Promise<profile>

Maps raw OIDC claims into an application-specific profile shape.

#### `input`