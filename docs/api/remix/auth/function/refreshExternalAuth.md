---
title: refreshExternalAuth
---

# refreshExternalAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/refresh-external-auth.ts#L26" target="_blank">View Source</a>

## Summary

Refreshes an OAuth or OIDC token bundle with the provider's refresh-token flow.

## Signature

```ts
function refreshExternalAuth<
  profile,
  provider extends string,
  tokens extends OAuthTokens,
>(
  provider: OAuthProvider<profile, provider, tokens>,
  tokens: NoInferValue<tokens>,
): Promise<RefreshedExternalAuthResult<provider, tokens>>;

```

## Params

### provider

### tokens

## Returns

The provider name plus the refreshed token bundle.