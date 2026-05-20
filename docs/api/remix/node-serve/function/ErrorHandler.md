---
title: ErrorHandler
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