---
title: completeAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth/src/lib/complete-auth.ts#L12
---

# completeAuth

## Summary

Rotates the current session id and returns the fresh session for auth writes.

## Signature

```ts
function completeAuth<context extends RequestContext<any, any>>(
  context: context,
): Session;

```

## Params

### `context`

## Returns

The current session after its id has been regenerated.