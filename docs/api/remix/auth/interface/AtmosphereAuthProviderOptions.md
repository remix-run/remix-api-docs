---
title: AtmosphereAuthProviderOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/atmosphere.ts#L140
---

# AtmosphereAuthProviderOptions

## Summary

Options for creating an Atmosphere auth provider.

## Signature

```ts
interface AtmosphereAuthProviderOptions<profile> {
  authorizationParams?: Record<string, string | undefined>;
  clientAuthentication?: AtmosphereClientAuthentication;
  clientId: string | URL;
  redirectUri: string | URL;
  scopes?: string[];
  sessionSecret: string;
  mapProfile(
    input: AtmosphereAuthProviderMapProfileInput,
  ): profile | Promise<profile>;
}

```

## Properties

### `authorizationParams`

Additional authorization parameters included in the pushed authorization request.

### `clientAuthentication`

Optional confidential-client settings for `private_key_jwt` authentication.

### `clientId`

Public client metadata URL, or `http://localhost` for loopback development clients.

### `redirectUri`

Redirect URI registered for the client metadata document.

### `scopes`

Requested atproto OAuth scopes. Must include `atproto`.

### `sessionSecret`

Secret used to encrypt per-flow DPoP state stored in the OAuth transaction session value.

## Methods

### `mapProfile(input: AtmosphereAuthProviderMapProfileInput): profile | Promise<profile>`

Maps the resolved atproto identity into an application-specific profile shape.

