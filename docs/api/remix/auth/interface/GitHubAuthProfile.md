---
title: GitHubAuthProfile
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/github.ts#L34
---

# GitHubAuthProfile

## Summary

Profile fields returned by the built-in GitHub auth provider.

## Signature

```ts
interface GitHubAuthProfile {
  avatar_url?: string;
  email?: string | null;
  html_url?: string;
  id: number;
  login: string;
  name?: string | null;
}

```

## Properties

### `avatar_url`

Avatar image URL returned by GitHub, when available.

### `email`

Primary email returned by GitHub, when available.

### `html_url`

Public GitHub profile URL, when available.

### `id`

Stable GitHub user identifier.

### `login`

GitHub login handle.

### `name`

Display name returned by GitHub, when available.