---
title: startExternalAuth
---

# startExternalAuth

## Summary

Starts an OAuth or OIDC login redirect flow for an external provider.

## Signature

```ts
function startExternalAuth<
  context extends RequestContext<any, any>,
  profile,
  provider extends string,
  tokens extends OAuthTokens,
>(
  provider: OAuthProvider<profile, provider, tokens>,
  context: context,
  options: StartExternalAuthOptions,
): Promise<Response>;

```

## Parameters

### `provider`

### `context`

### `options`

Transaction storage and optional return-to settings.

## Returns

A redirect response to the provider authorization URL.