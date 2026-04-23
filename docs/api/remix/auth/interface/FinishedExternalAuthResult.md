---
title: FinishedExternalAuthResult
---

# FinishedExternalAuthResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/finish-external-auth.ts#L19" target="_blank">View Source</a>

## Summary

Completed result returned from a successful OAuth or OIDC callback flow.

## Signature

```ts
interface FinishedExternalAuthResult<profile, provider> {
  result: OAuthResult<profile, provider>;
  returnTo?: string;
}

```

## Properties

### result

Normalized OAuth or OIDC result returned by the provider runtime.

### returnTo

Preserved post-auth redirect target, when one was stored in the transaction.