---
title: RefreshedExternalAuthResult
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

### `provider`

Provider name whose token bundle was refreshed.

### `tokens`

Updated token bundle returned by the provider runtime.