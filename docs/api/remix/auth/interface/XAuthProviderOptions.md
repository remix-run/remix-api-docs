---
title: XAuthProviderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/x.ts#L22
---

# XAuthProviderOptions

## Summary

Options for creating the built-in X auth provider.

## Signature

```ts
interface XAuthProviderOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string | URL;
  scopes?: string[];
}

```

## Properties

### clientId

OAuth client identifier for your X application.

### clientSecret

OAuth client secret for your X application.

### redirectUri

Callback URL registered with X.

### scopes

Requested scopes for the X login flow.