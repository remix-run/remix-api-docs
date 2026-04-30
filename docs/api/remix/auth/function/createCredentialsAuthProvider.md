---
title: createCredentialsAuthProvider
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/providers/credentials.ts#L37
---

# createCredentialsAuthProvider

## Summary

Creates a credentials provider for direct form-based authentication.

## Signature

```ts
function createCredentialsAuthProvider<input, result, provider extends string>(
  options: CredentialsAuthProviderOptions<input, result, provider>,
): CredentialsAuthProvider<input, result, provider>;

```

## Params

### `options`

Options for parsing submitted credentials and verifying them.

## Returns

A provider that can be passed to `verifyCredentials()`.