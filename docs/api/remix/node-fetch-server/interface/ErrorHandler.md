---
title: ErrorHandler
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/node-fetch-server/src/lib/fetch-handler.ts#L44
---

# ErrorHandler

## Summary

Handles a thrown request-processing error and may return a custom response.

## Signature

```ts
interface ErrorHandler {
  (error: unknown): void | Response | Promise<void | Response>
}

```