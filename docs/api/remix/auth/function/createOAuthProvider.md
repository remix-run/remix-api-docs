---
title: createOAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L145
---

# createOAuthProvider

## Summary

Creates an OAuth provider for use with the external auth request helpers.

## Signature

```ts
function createOAuthProvider<profile, provider extends string, tokens extends OAuthTokens>(
  name: provider,
  runtime: OAuthProviderRuntime<profile, provider, tokens>,
): OAuthProvider<profile, provider, tokens>

```

## Parameters

### `name`

Stable provider name used for routing and persisted transactions.

### `runtime`

Provider-owned authorization, callback, and optional token refresh hooks.

## Returns

A provider that can be passed to `startExternalAuth()`, `finishExternalAuth()`, and
`refreshExternalAuth()`.