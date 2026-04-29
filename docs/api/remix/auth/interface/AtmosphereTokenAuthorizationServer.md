---
title: AtmosphereTokenAuthorizationServer
---

# AtmosphereTokenAuthorizationServer

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/atmosphere.ts#L108" target="_blank">View Source</a>

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