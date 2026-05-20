---
title: createCredentialsAuthProvider
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

## Parameters

### `options`

Options for parsing submitted credentials and verifying them.

## Returns

A provider that can be passed to `verifyCredentials()`.