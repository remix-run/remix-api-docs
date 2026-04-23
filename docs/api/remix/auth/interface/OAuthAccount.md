---
title: OAuthAccount
---

# OAuthAccount

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/provider.ts#L24" target="_blank">View Source</a>

## Summary

Stable account identifier for a provider-backed identity.

## Signature

```ts
interface OAuthAccount<provider> {
  provider: provider;
  providerAccountId: string;
}

```

## Properties

### provider

Provider name that issued the account identifier.

### providerAccountId

Stable provider-specific account identifier for the authenticated user.