---
title: createHeaders
---

# createHeaders

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/request-listener.ts#L185" target="_blank">View Source</a>

## Summary

Creates a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object from the headers in a Node.js
[`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage)/[`http2.Http2ServerRequest`](https://nodejs.org/api/http2.html#class-http2http2serverrequest).

## Signature

```ts
function createHeaders(req: IncomingMessage | Http2ServerRequest): Headers;

```

## Params

### req

The incoming request object

## Returns

A `Headers` object