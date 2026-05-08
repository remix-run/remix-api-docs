---
title: Server
source: https://github.com/remix-run/remix/blob/main/packages/node-serve/src/lib/server.ts#L104
---

# Server

## Summary

A running Node.js server created by `serve()`.

## Signature

```ts
interface Server {
  app: TemplatedApp;
  port: number;
  ready: Promise<void>;
  close(): void;
}

```

## Properties

### `app`

The underlying native server application for advanced transport-specific customization.

### `port`

The active TCP port after `ready` resolves. This is useful when listening on port 0.

### `ready`

A promise that resolves when the server has started listening.

## Methods

### `close(): void`

Closes the listening socket and active connections.

