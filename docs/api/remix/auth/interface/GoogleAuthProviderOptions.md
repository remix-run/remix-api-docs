---
title: GoogleAuthProviderOptions
---

# GoogleAuthProviderOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/google.ts#L25" target="_blank">View Source</a>

## Summary

Options for creating the built-in Google auth provider.

## Signature

```ts
interface GoogleAuthProviderOptions {
  authorizationParams?: Record<string, string | undefined>;
  clientId: string;
  clientSecret: string;
  redirectUri: string | URL;
  scopes?: string[];
}

```

## Properties

### authorizationParams

Additional authorization parameters appended to the login redirect, such as `access_type=offline`.

### clientId

OAuth client identifier for your Google application.

### clientSecret

OAuth client secret for your Google application.

### redirectUri

Callback URL registered with Google.

### scopes

Requested scopes for the Google login flow.