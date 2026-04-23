---
title: finishExternalAuth
---

# finishExternalAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/finish-external-auth.ts#L34" target="_blank">View Source</a>

## Summary

Finishes an OAuth or OIDC callback flow for an external provider.

## Signature

```ts
function finishExternalAuth<
  context extends RequestContext<any, any>,
  profile,
  provider extends string,
>(
  provider: OAuthProvider<profile, provider>,
  context: context,
  options: FinishExternalAuthOptions,
): Promise<FinishedExternalAuthResult<profile, provider>>;

```

## Params

### provider

### context

### options

Transaction lookup settings.

## Returns

The normalized provider result plus the preserved `returnTo` target, when available.