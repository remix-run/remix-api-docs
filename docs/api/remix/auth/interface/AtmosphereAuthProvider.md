---
title: AtmosphereAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/atmosphere.ts#L128
---

# AtmosphereAuthProvider

## Summary

Built-in Atmosphere auth provider.

## Signature

```ts
interface AtmosphereAuthProvider<profile> {
  [oauthProviderTokens]?: (
    tokens: AtmosphereOAuthTokens,
  ) => AtmosphereOAuthTokens;
  name: "atmosphere";
  prepare(
    handleOrDid: string,
  ): Promise<OAuthProvider<profile, "atmosphere", AtmosphereOAuthTokens>>;
}

```

## Properties

### [oauthProviderTokens]

Phantom token marker used to preserve provider-specific token types.

### name

Provider name used for routing, callbacks, and persisted transactions.

## Methods

### prepare(handleOrDid: string): Promise<OAuthProvider<profile, "atmosphere", AtmosphereOAuthTokens>>

Resolves a request-time handle or DID into a prepared provider for `startExternalAuth()`.

#### `handleOrDid`