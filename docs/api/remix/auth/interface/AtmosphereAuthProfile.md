---
title: AtmosphereAuthProfile
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/atmosphere.ts#L30
---

# AtmosphereAuthProfile

## Summary

Profile returned by the built-in Atmosphere auth provider.

## Signature

```ts
interface AtmosphereAuthProfile {
  authorizationServer: string;
  did: string;
  handle?: string;
  pdsUrl: string;
}

```

## Properties

### authorizationServer

Authorization server issuer that authorized the current session.

### did

Stable DID for the authenticated atproto account.

### handle

Verified handle claimed by the DID document, when one is available.

### pdsUrl

Personal Data Server URL declared in the DID document.