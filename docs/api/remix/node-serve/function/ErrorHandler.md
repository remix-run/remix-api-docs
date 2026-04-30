---
title: ErrorHandler
source: https://github.com/remix-run/remix/blob/main/packages/node-serve/src/lib/fetch-handler.ts#L38
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