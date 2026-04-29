---
title: RequestHandler
---

# RequestHandler

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/controller.ts#L122" target="_blank">View Source</a>

## Summary

Handles a matched request and returns the response.

## Signature

```ts
interface RequestHandler {
  (context: context): Response | Promise<Response>;
}

```