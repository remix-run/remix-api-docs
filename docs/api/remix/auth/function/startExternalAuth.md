---
title: startExternalAuth
---

# startExternalAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/start-external-auth.ts#L30" target="_blank">View Source</a>

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

### provider

### context

### options

Transaction storage and optional return-to settings.

## Returns

A redirect response to the provider authorization URL.