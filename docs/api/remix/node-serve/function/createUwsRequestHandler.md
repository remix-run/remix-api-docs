---
title: createUwsRequestHandler
source: https://github.com/remix-run/remix/blob/main/packages/node-serve/src/lib/server.ts#L130
---

# createUwsRequestHandler

## Summary

Creates a route handler for an existing uWebSockets.js app from a Fetch API handler.

## Signature

```ts
function createUwsRequestHandler(
  handler: FetchHandler,
  options: UwsRequestHandlerOptions,
): UwsRequestHandler;

```

## Parameters

### `handler`

The fetch handler to use for processing incoming requests

### `options`

Request handler options

## Returns

A route handler that can be registered on a uWebSockets.js app