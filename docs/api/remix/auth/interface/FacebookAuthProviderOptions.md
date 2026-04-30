---
title: FacebookAuthProviderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/facebook.ts#L19
---

# FacebookAuthProviderOptions

## Summary

Options for creating the built-in Facebook auth provider.

## Signature

```ts
interface FacebookAuthProviderOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string | URL;
  scopes?: string[];
}

```

## Properties

### clientId

OAuth client identifier for your Facebook Login app.

### clientSecret

OAuth client secret for your Facebook Login app.

### redirectUri

Callback URL registered with Facebook Login.

### scopes

Requested scopes for the Facebook login flow.