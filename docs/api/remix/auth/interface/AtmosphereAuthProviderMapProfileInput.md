---
title: AtmosphereAuthProviderMapProfileInput
---

# AtmosphereAuthProviderMapProfileInput

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/atmosphere.ts#L88" target="_blank">View Source</a>

## Summary

Input passed to `mapProfile()` for the Atmosphere provider.

## Signature

```ts
interface AtmosphereAuthProviderMapProfileInput {
  authorizationServer: AtmosphereTokenAuthorizationServer;
  context: RequestContext;
  did: string;
  handle?: string;
  identifier: string;
  pdsUrl: string;
  tokens: AtmosphereOAuthTokens;
}

```

## Properties

### authorizationServer

Authorization server details retained for the authenticated account.

### context

Request context for the callback currently being processed.

### did

Stable DID returned by the authorization server token response.

### handle

Verified handle claimed by the DID document, when one is available.

### identifier

Original handle or DID used to start the authorization flow.

### pdsUrl

Personal Data Server URL declared in the DID document.

### tokens

OAuth tokens returned by the atproto authorization server.