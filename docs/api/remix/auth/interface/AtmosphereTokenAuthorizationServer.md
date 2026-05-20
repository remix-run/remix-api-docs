---
title: AtmosphereTokenAuthorizationServer
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

### `issuer`

Issuer origin for the authorization server that issued the token bundle.

### `tokenEndpoint`

Token endpoint used for refresh-token exchanges.