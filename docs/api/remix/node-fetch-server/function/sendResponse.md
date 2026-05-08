---
title: sendResponse
source: https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/request-listener.ts#L264
---

# sendResponse

## Summary

Sends a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to the client using a Node.js
[`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse)
object.

## Signature

```ts
function sendResponse(
  res:
    | ServerResponse<IncomingMessage>
    | Http2ServerResponse<Http2ServerRequest>,
  response: Response,
): Promise<void>;

```

## Parameters

### `res`

The server response object

### `response`

The response to send