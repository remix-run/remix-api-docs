---
title: createGitHubAuthProvider
---

# createGitHubAuthProvider

## Summary

Creates a GitHub OAuth App provider.

## Signature

```ts
function createGitHubAuthProvider(
  options: GitHubAuthProviderOptions,
): OAuthProvider<GitHubAuthProfile, "github", OAuthStandardTokens>;

```

## Parameters

### `options`

GitHub OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.