---
title: completeAuth
---

# completeAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/complete-auth.ts#L12" target="_blank">View Source</a>

## Summary

Rotates the current session id and returns the fresh session for auth writes.

## Signature

```ts
function completeAuth<context extends RequestContext<any, any>>(
  context: context,
): Session;

```

## Params

### context

## Returns

The current session after its id has been regenerated.