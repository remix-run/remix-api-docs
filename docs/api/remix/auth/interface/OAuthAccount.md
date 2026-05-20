---
title: OAuthAccount
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

### `provider`

Provider name that issued the account identifier.

### `providerAccountId`

Stable provider-specific account identifier for the authenticated user.