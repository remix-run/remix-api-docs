---
title: MicrosoftAuthProviderOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/microsoft.ts#L24
---

# MicrosoftAuthProviderOptions

## Summary

Options for creating the built-in Microsoft auth provider.

## Signature

```ts
interface MicrosoftAuthProviderOptions {
  authorizationParams?: Record<string, string | undefined>;
  clientId: string;
  clientSecret: string;
  discoveryUrl?: string | URL;
  mapProfile?: (input: {
    claims: OIDCAuthProfile;
    context: RequestContext;
    metadata: OIDCAuthProviderMetadata;
    tokens: OAuthTokens;
  }) => MicrosoftAuthProfile | Promise<MicrosoftAuthProfile>;
  metadata?: OIDCAuthProviderMetadata;
  redirectUri: string | URL;
  scopes?: string[];
  tenant?: string;
}

```

## Properties

### `authorizationParams`

Additional authorization parameters appended to the login redirect.

### `clientId`

OAuth client identifier for your application.

### `clientSecret`

OAuth client secret for your application.

### `discoveryUrl`

Optional override for the discovery document URL.

### `mapProfile`

### `metadata`

Optional inline discovery metadata used instead of fetching it.

### `redirectUri`

Callback URL registered with the provider.

### `scopes`

Requested scopes for the login flow.

### `tenant`

Tenant segment used to build the Microsoft issuer URL.