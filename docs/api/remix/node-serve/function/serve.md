---
title: serve
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