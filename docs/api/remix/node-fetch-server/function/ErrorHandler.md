---
title: ErrorHandler
---

# ErrorHandler

<a href="https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/fetch-handler.ts#L38" target="_blank">View Source</a>

## Summary

Handles a thrown request-processing error and may return a custom response.

## Signature

```ts
interface ErrorHandler {
  (error: unknown): void | Response | Promise<void | Response>;
}

```