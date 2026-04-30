---
title: ServeOptions
source: https://github.com/remix-run/remix/blob/main/packages/node-serve/src/lib/server.ts#L64
---

# ServeOptions

## Summary

Options for a server created with `serve()`.

## Signature

```ts
interface ServeOptions {
  host?: string;
  listenHost?: string;
  onError?: ErrorHandler;
  port?: number;
  protocol?: string;
  tls?: ServeTlsOptions;
}

```

## Properties

### host

Overrides the host portion of the incoming request URL. By default the request URL host is
derived from the HTTP `Host` header.

### listenHost

The hostname or IP address to listen on. By default the server listens on all interfaces.

### onError

An error handler that determines the response when the request handler throws an error. By
default a 500 Internal Server Error response will be sent.

### port

The TCP port to listen on. Defaults to 3000.

### protocol

Overrides the protocol of the incoming request URL. Defaults to `http:` or `https:` when `tls`
is provided.

### tls

TLS options. When provided, the server accepts HTTPS requests and incoming request URLs default
to the `https:` protocol.