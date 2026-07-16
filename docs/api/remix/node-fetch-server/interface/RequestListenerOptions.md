---
title: RequestListenerOptions
source: https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/request-listener.ts#L25
---

# RequestListenerOptions

## Summary

Options for creating a Node.js request listener.

## Signature

```ts
interface RequestListenerOptions {
  host?: string
  onError?: ErrorHandler
  protocol?: string
  trustProxy?: boolean
}

```

## Properties

### `host`

Overrides the host portion of the incoming request URL. By default the request URL host is
derived from the HTTP `Host` header.

For example, if you have a `$HOST` environment variable that contains the hostname of your
server, you can use it to set the host of all incoming request URLs like so:

```ts
createRequestListener(handler, { host: process.env.HOST })
```

### `onError`

An error handler that determines the response when the request handler throws an error. By
default a 500 Internal Server Error response will be sent.

### `protocol`

Overrides the protocol of the incoming request URL. By default the request URL protocol is
derived from the connection protocol. So e.g. when serving over HTTPS (using
`https.createServer()`), the request URL will begin with `https:`.

### `trustProxy`

Trusts reverse proxy headers. When enabled, `Forwarded`, `X-Forwarded-Host`, and
`X-Forwarded-Proto` can provide the incoming request URL host and protocol when `host` and
`protocol` are not set. `Forwarded` and `X-Forwarded-For` can provide the client address for
request listeners that read client information. Only enable this when your server is behind a
trusted proxy that overwrites these headers.