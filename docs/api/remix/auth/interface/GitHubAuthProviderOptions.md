---
title: GitHubAuthProviderOptions
---

# GitHubAuthProviderOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/github.ts#L20" target="_blank">View Source</a>

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