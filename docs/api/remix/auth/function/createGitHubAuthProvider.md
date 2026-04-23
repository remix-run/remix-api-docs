---
title: createGitHubAuthProvider
---

# createGitHubAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/providers/github.ts#L69" target="_blank">View Source</a>

## Summary

Creates a GitHub OAuth App provider.

## Signature

```ts
function createGitHubAuthProvider(
  options: GitHubAuthProviderOptions,
): OAuthProvider<GitHubAuthProfile, "github">;

```

## Params

### options

GitHub OAuth client settings for your application.

## Returns

An OAuth provider that can be passed to `startExternalAuth()` and `finishExternalAuth()`.