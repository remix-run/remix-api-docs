---
title: OAuthTransaction
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L70
---

# OAuthTransaction

## Summary

In-progress OAuth data persisted between the authorization redirect and callback.

## Signature

```ts
interface OAuthTransaction {
  codeVerifier: string
  provider: string
  providerState?: string
  returnTo?: string
  state: string
}

```

## Properties

### `codeVerifier`

PKCE verifier used to exchange the callback authorization code.

### `provider`

Provider name that started the transaction.

### `providerState`

Opaque provider-owned data persisted with the transaction.

Providers must encrypt sensitive values before assigning this field because session storage
is not guaranteed to provide confidentiality.

### `returnTo`

Optional post-auth redirect target supplied by the application.

### `state`

Random value used to validate the callback.