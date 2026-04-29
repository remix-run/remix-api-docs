---
title: RefreshedExternalAuthResult
---

# RefreshedExternalAuthResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/refresh-external-auth.ts#L9" target="_blank">View Source</a>

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