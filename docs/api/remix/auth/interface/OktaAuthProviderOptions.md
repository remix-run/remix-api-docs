---
title: OktaAuthProviderOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/okta.ts#L17
---

# OktaAuthProviderOptions

## Summary

Options for creating the built-in Okta auth provider.

## Signature

```ts
interface OktaAuthProviderOptions {
  authorizationParams?: Record<string, string | undefined>;
  clientId: string;
  clientSecret: string;
  discoveryUrl?: string | URL;
  issuer: string | URL;
  mapProfile?: (input: {
    claims: OIDCAuthProfile;
    context: RequestContext;
    metadata: OIDCAuthProviderMetadata;
    tokens: OAuthTokens;
  }) => OktaAuthProfile | Promise<OktaAuthProfile>;
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

### issuer

Issuer base URL used for discovery and validation.

### mapProfile

### metadata

Optional inline discovery metadata used instead of fetching it.

### redirectUri

Callback URL registered with the provider.

### scopes

Requested scopes for the login flow.