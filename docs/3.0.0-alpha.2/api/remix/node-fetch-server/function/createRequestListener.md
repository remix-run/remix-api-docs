---
title: createRequestListener
---

# createRequestListener

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/request-listener.ts#L65" target="_blank">View Source</a>

## Summary

Wraps a fetch handler in a Node.js request listener that can be used with:

- [`http.createServer()`](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
- [`https.createServer()`](https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener)
- [`http2.createServer()`](https://nodejs.org/api/http2.html#http2createserveroptions-onrequesthandler)
- [`http2.createSecureServer()`](https://nodejs.org/api/http2.html#http2createsecureserveroptions-onrequesthandler)

Example:

```ts
import * as http from 'node:http';
import { createRequestListener } from 'remix/node-fetch-server';

async function handler(request) {
  return new Response('Hello, world!');
}

let server = http.createServer(
  createRequestListener(handler)
);

server.listen(3000);
```

## Signature

```ts
function createRequestListener(
  handler: FetchHandler,
  options: RequestListenerOptions,
): RequestListener;

```

## Params

### handler

The fetch handler to use for processing incoming requests

### options

Request listener options

## Returns

A Node.js request listener function