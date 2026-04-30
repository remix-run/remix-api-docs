---
title: startExternalAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/start-external-auth.ts#L30
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

## Params

### `provider`

### `context`

### `options`

Transaction storage and optional return-to settings.

## Returns

A redirect response to the provider authorization URL.