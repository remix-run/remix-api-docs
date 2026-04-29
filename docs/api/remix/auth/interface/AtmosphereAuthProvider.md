---
title: AtmosphereAuthProvider
---

# AtmosphereAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/atmosphere.ts#L128" target="_blank">View Source</a>

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

#### handleOrDid