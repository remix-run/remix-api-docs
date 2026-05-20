---
title: FetchHandler
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