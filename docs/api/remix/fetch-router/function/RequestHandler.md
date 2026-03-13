---
title: RequestHandler
---

# RequestHandler

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L65" target="_blank">View Source</a>

## Summary

Handles a matched request and returns the response.

## Signature

```ts
interface RequestHandler {
  (context: RequestContext<params>): Response | Promise<Response>;
}

```