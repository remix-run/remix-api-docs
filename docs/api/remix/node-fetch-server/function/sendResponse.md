---
title: sendResponse
---

# sendResponse

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/request-listener.ts#L205" target="_blank">View Source</a>

## Summary

Sends a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to the client using a Node.js
[`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse)
object.

## Signature

```ts
function sendResponse(
  res:
    | Http2ServerResponse<Http2ServerRequest>
    | ServerResponse<IncomingMessage>,
  response: Response,
): Promise<void>;

```

## Params

### res

The server response object

### response

The response to send