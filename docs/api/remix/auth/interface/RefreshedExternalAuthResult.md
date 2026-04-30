---
title: RefreshedExternalAuthResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/refresh-external-auth.ts#L9
---

# RefreshedExternalAuthResult

## Summary

Completed result returned from a successful refresh-token exchange.

## Signature

```ts
interface RefreshedExternalAuthResult<provider, tokens> {
  provider: provider;
  tokens: tokens;
}

```

## Properties

### provider

Provider name whose token bundle was refreshed.

### tokens

Updated token bundle returned by the provider runtime.