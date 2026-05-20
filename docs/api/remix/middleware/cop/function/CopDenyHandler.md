---
title: CopDenyHandler
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