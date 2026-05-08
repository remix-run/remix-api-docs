---
title: FetchHandler
source: https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/fetch-handler.ts#L56
---

# FetchHandler

## Summary

Handles an incoming request and returns the response sent to the client.

## Signature

```ts
interface FetchHandler {
  (request: Request, client: ClientAddress): Response | Promise<Response>;
}

```