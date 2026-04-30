---
title: CopDenyHandler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/cop-middleware/src/lib/cop.ts#L27
---

# CopDenyHandler

## Summary

Builds the response returned when a request is denied.

## Signature

```ts
interface CopDenyHandler {
  (
    reason: CopFailureReason,
    context: RequestContext,
  ): Response | Promise<Response>;
}

```