---
title: OAuthResult
---

# OAuthResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/provider.ts#L69" target="_blank">View Source</a>

## Summary

Normalized result returned by OAuth and OIDC callback handlers.

## Signature

```ts
interface OAuthResult<profile, provider, tokens> {
  account: OAuthAccount<provider>;
  profile: profile;
  provider: provider;
  tokens: tokens;
}

```

## Properties

### account

Stable provider-backed account identity for the authenticated user.

### profile

Normalized profile data returned by the provider.

### provider

Provider name that completed the callback flow.

### tokens

Tokens returned by the provider for the completed authorization flow.