---
title: TestServer
---

# TestServer

## Summary

Result returned by [`createTestServer`](/api/remix/node-fetch-server/test/function/createTestServer/).

## Signature

```ts
interface TestServer {
  baseUrl: string;
  close(): Promise<void>;
}

```

## Properties

### `baseUrl`

The base URL the server is listening on, e.g. `http://127.0.0.1:54321`.

## Methods

### `close(): Promise<void>`

Stops the server and resolves once all in-flight connections have closed.

