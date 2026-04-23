---
title: GoogleAuthProviderOptions
---

# GoogleAuthProviderOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/providers/google.ts#L25" target="_blank">View Source</a>

## Summary

Options for creating the built-in Google auth provider.

## Signature

```ts
interface GoogleAuthProviderOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string | URL;
  scopes?: string[];
}

```

## Properties

### clientId

OAuth client identifier for your Google application.

### clientSecret

OAuth client secret for your Google application.

### redirectUri

Callback URL registered with Google.

### scopes

Requested scopes for the Google login flow.