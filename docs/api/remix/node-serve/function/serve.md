---
title: serve
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/node-serve/src/lib/server.ts#L227
---

# serve

## Summary

Starts a server that sends incoming requests to a Fetch API handler.

## Signature

```ts
function serve(handler: FetchHandler, options: ServeOptions): Server;

```

## Params

### `handler`

The fetch handler to use for processing incoming requests

### `options`

Server options

## Returns

The running server