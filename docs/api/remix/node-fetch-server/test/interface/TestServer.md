---
title: TestServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/node-fetch-server/src/lib/test-server.ts#L8
---

# TestServer

## Summary

Result returned by createTestServer.

## Signature

```ts
interface TestServer {
  baseUrl: string;
  close(): Promise<void>;
}

```

## Properties

### baseUrl

The base URL the server is listening on, e.g. `http://127.0.0.1:54321`.

## Methods

### close(): Promise<void>

Stops the server and resolves once all in-flight connections have closed.