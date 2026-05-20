---
title: FinishedExternalAuthResult
---

# FinishedExternalAuthResult

## Summary

Completed result returned from a successful OAuth or OIDC callback flow.

## Signature

```ts
interface FinishedExternalAuthResult<profile, provider, tokens> {
  result: OAuthResult<profile, provider, tokens>;
  returnTo?: string;
}

```

## Properties

### `result`

Normalized OAuth or OIDC result returned by the provider runtime.

### `returnTo`

Preserved post-auth redirect target, when one was stored in the transaction.