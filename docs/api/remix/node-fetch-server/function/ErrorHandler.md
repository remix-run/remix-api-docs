---
title: ErrorHandler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/node-fetch-server/src/lib/fetch-handler.ts#L38
---

# ErrorHandler

## Summary

Handles a thrown request-processing error and may return a custom response.

## Signature

```ts
interface ErrorHandler {
  (error: unknown): void | Response | Promise<void | Response>;
}

```