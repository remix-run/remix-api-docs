---
title: FetchHandler
---

# FetchHandler

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/fetch-handler.ts#L50" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface FetchHandler {
  (request: Request, client: ClientAddress): Response | Promise<Response>;
}

```

## Params

### request

The incoming request

### client

Information about the client that sent the request

## Returns

A response to send to the client