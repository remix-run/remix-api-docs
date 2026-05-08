---
title: serve
source: https://github.com/remix-run/remix/blob/main/packages/node-serve/src/lib/server.ts#L233
---

# serve

## Summary

Starts a server that sends incoming requests to a Fetch API handler.

## Signature

```ts
function serve(handler: FetchHandler, options: ServeOptions): Server;

```

## Parameters

### `handler`

The fetch handler to use for processing incoming requests

### `options`

Server options

## Returns

The running server