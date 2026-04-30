---
title: createRequest
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/node-fetch-server/src/lib/request-listener.ts#L192
---

# createRequest

## Summary

Creates a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object from

- a [`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage)/[`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse) pair
- a [`http2.Http2ServerRequest`](https://nodejs.org/api/http2.html#class-http2http2serverrequest)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse) pair

## Signature

```ts
function createRequest(
  req: IncomingMessage | Http2ServerRequest,
  res:
    | ServerResponse<IncomingMessage>
    | Http2ServerResponse<Http2ServerRequest>,
  options: RequestOptions,
): Request;

```

## Params

### `req`

The incoming request object

### `res`

The server response object

### `options`

Options for creating the request

## Returns

A `Request` object