---
title: GitHubAuthProviderEmail
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/github.ts#L52
---

# GitHubAuthProviderEmail

## Summary

Email records returned by GitHub's `/user/emails` endpoint.

## Signature

```ts
interface GitHubAuthProviderEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility?: string | null;
}

```

## Properties

### `email`

Email address returned by the `/user/emails` endpoint.

### `primary`

Indicates whether this email is the primary address.

### `verified`

Indicates whether GitHub has verified this email address.

### `visibility`

GitHub visibility setting for the email address, when available.