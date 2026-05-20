---
title: RequestHandler
---

# RequestHandler

## Summary

Handles a matched request and returns the response.

## Signature

```ts
interface RequestHandler {
  (context: context): Response | Promise<Response>;
}

```