---
title: CopDenyHandler
---

# CopDenyHandler

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/cop-middleware/src/lib/cop.ts#L27" target="_blank">View Source</a>

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