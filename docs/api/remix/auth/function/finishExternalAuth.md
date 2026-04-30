---
title: finishExternalAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/finish-external-auth.ts#L38
---

# finishExternalAuth

## Summary

Finishes an OAuth or OIDC callback flow for an external provider.

## Signature

```ts
function finishExternalAuth<
  context extends RequestContext<any, any>,
  profile,
  provider extends string,
  tokens extends OAuthTokens,
>(
  provider: OAuthProvider<profile, provider, tokens>,
  context: context,
  options: FinishExternalAuthOptions,
): Promise<FinishedExternalAuthResult<profile, provider, tokens>>;

```

## Params

### `provider`

### `context`

### `options`

Transaction lookup settings.

## Returns

The normalized provider result plus the preserved `returnTo` target, when available.