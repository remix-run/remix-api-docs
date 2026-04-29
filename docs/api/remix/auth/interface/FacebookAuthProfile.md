---
title: FacebookAuthProfile
---

# FacebookAuthProfile

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/providers/facebook.ts#L44" target="_blank">View Source</a>

## Summary

Profile fields returned by the built-in Facebook auth provider.

## Signature

```ts
interface FacebookAuthProfile {
  email?: string;
  id: string;
  name?: string;
  picture?: FacebookAuthProviderPicture;
}

```

## Properties

### email

Email address returned by Facebook, when available.

### id

Stable Facebook user identifier.

### name

Display name returned by Facebook, when available.

### picture

Nested profile picture payload returned by Facebook, when available.