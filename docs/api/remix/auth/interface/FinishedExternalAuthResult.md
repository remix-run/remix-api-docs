---
title: FinishedExternalAuthResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/auth/src/lib/finish-external-auth.ts#L19
---

# FinishedExternalAuthResult

## Summary

Completed result returned from a successful OAuth or OIDC callback flow.

## Signature

```ts
interface FinishedExternalAuthResult<profile, provider, tokens> {
  result: OAuthResult<profile, provider, tokens>
  returnTo?: string
}

```

## Properties

### `result`

Normalized OAuth or OIDC result returned by the provider runtime.

### `returnTo`

Normalized local post-auth redirect path, when the stored target is valid.