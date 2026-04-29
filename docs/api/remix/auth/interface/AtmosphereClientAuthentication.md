---
title: AtmosphereClientAuthentication
---

# AtmosphereClientAuthentication

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/atmosphere.ts#L78" target="_blank">View Source</a>

## Summary

Client-authentication settings for confidential Atmosphere clients.

## Signature

```ts
interface AtmosphereClientAuthentication {
  key: CryptoKey;
  keyId: string;
}

```

## Properties

### key

Private `ES256` signing key used to generate `private_key_jwt` assertions.

### keyId

Key identifier published in the client's JWKS metadata.