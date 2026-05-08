---
title: createGitHubAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/github.ts#L69
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