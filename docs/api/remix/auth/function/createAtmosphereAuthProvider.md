---
title: createAtmosphereAuthProvider
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/atmosphere.ts#L220
---

# createAtmosphereAuthProvider

## Summary

Creates an Atmosphere auth provider with shared client options.

Because atproto discovery is account-specific, call `prepare(handleOrDid)`
before passing this provider to `startExternalAuth()`.

## Signature

```ts
function createAtmosphereAuthProvider<profile extends AtmosphereAuthProfile>(
  options: AtmosphereAuthProviderOptions<profile>,
): AtmosphereAuthProvider<profile>;

```

## Params

### `options`

Atmosphere client configuration, session encryption secret, and optional profile mapping hooks.

## Returns

A provider that can be prepared for `startExternalAuth()` and passed directly to `finishExternalAuth()` and `refreshExternalAuth()`.