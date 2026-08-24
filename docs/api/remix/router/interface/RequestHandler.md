---
title: RequestHandler
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/fetch-router/src/lib/controller.ts#L19
---

# RequestHandler

## Summary

Handles a matched request and returns the response.

## Signature

```ts
interface RequestHandler {
  (context: context): Response | Promise<Response>
}

```