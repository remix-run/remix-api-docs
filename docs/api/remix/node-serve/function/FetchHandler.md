---
title: FetchHandler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/node-serve/src/lib/fetch-handler.ts#L56
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