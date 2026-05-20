---
title: XAuthProfile
---

# XAuthProfile

## Summary

Profile fields returned by the built-in X auth provider.

## Signature

```ts
interface XAuthProfile {
  description?: string;
  id: string;
  name: string;
  profile_image_url?: string;
  url?: string;
  username: string;
  verified?: boolean;
}

```

## Properties

### `description`

Bio text returned by X, when available.

### `id`

Stable X user identifier.

### `name`

Display name returned by X.

### `profile_image_url`

Profile image URL returned by X, when available.

### `url`

Profile URL returned by X, when available.

### `username`

X username returned by the provider.

### `verified`

Indicates whether the account is verified, when available.