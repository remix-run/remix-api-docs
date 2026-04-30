---
title: GitHubAuthProviderOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/github.ts#L20
---

# GitHubAuthProviderOptions

## Summary

Options for creating the built-in GitHub auth provider.

## Signature

```ts
interface GitHubAuthProviderOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string | URL;
  scopes?: string[];
}

```

## Properties

### clientId

OAuth client identifier for your GitHub OAuth App.

### clientSecret

OAuth client secret for your GitHub OAuth App.

### redirectUri

Callback URL registered with GitHub.

### scopes

Requested scopes for the GitHub login flow.