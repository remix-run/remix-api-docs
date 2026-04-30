---
title: AtmosphereTokenAuthorizationServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/atmosphere.ts#L108
---

# AtmosphereTokenAuthorizationServer

## Summary

Authorization server details stored with Atmosphere DPoP-bound tokens for refresh.

## Signature

```ts
interface AtmosphereTokenAuthorizationServer {
  issuer: string;
  tokenEndpoint: string;
}

```

## Properties

### issuer

Issuer origin for the authorization server that issued the token bundle.

### tokenEndpoint

Token endpoint used for refresh-token exchanges.