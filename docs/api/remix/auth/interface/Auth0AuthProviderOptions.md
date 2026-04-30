---
title: Auth0AuthProviderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/auth0.ts#L22
---

# Auth0AuthProviderOptions

## Summary

Options for creating the built-in Auth0 auth provider.

## Signature

```ts
interface Auth0AuthProviderOptions {
  authorizationParams?: Record<string, string | undefined>;
  clientId: string;
  clientSecret: string;
  discoveryUrl?: string | URL;
  domain: string;
  mapProfile?: (input: {
    claims: OIDCAuthProfile;
    context: RequestContext;
    metadata: OIDCAuthProviderMetadata;
    tokens: OAuthTokens;
  }) => Auth0AuthProfile | Promise<Auth0AuthProfile>;
  metadata?: OIDCAuthProviderMetadata;
  redirectUri: string | URL;
  scopes?: string[];
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

### domain

Auth0 tenant domain used to derive the issuer URL.

### mapProfile

### metadata

Optional inline discovery metadata used instead of fetching it.

### redirectUri

Callback URL registered with the provider.

### scopes

Requested scopes for the login flow.