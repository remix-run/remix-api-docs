---
title: OAuthProvider
---

# OAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/provider.ts#L48" target="_blank">View Source</a>

## Summary

Public shape for an OAuth or OIDC provider used by external auth request handlers.

## Signature

```ts
interface OAuthProvider<profile, provider> {
  name: provider;
}

```

## Properties

### name

Provider name used for routing, callbacks, and persisted transactions.