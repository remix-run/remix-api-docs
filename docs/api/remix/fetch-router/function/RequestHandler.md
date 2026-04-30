---
title: RequestHandler
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L122
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