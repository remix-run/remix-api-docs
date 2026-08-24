---
title: CopDenyHandler
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/cop-middleware/src/lib/cop.ts#L27
---

# CopDenyHandler

## Summary

Builds the response returned when a request is denied.

## Signature

```ts
interface CopDenyHandler {
  (reason: CopFailureReason, context: RequestContext): Response | Promise<Response>
}

```