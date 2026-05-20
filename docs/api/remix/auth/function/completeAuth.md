---
title: completeAuth
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

## Returns

The current session after its id has been regenerated.