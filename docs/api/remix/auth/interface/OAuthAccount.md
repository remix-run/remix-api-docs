---
title: OAuthAccount
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L59
---

# OAuthAccount

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