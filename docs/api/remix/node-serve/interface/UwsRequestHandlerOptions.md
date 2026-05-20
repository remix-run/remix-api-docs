---
title: UwsRequestHandlerOptions
---

# UwsRequestHandlerOptions

## Summary

Options for `createUwsRequestHandler()`.

## Signature

```ts
interface UwsRequestHandlerOptions {
  host?: string;
  onError?: ErrorHandler;
  protocol?: string;
}

```

## Properties

### `host`

Overrides the host portion of the incoming request URL. By default the request URL host is
derived from the HTTP `Host` header.

### `onError`

An error handler that determines the response when the request handler throws an error. By
default a 500 Internal Server Error response will be sent.

### `protocol`

Overrides the protocol of the incoming request URL. Defaults to `http:`.