---
title: ClientAddress
source: https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/fetch-handler.ts#L4
---

# ClientAddress

## Summary

Information about the client that sent a request.

## Signature

```ts
interface ClientAddress {
  address: string
  family: 'IPv4' | 'IPv6'
  port: number
}

```

## Properties

### `address`

The IP address of the client that sent the request.

When `trustProxy` is enabled, this may come from trusted proxy headers.

[Node.js Reference](https://nodejs.org/api/net.html#socketremoteaddress)

### `family`

The family of the client IP address.

When `trustProxy` is enabled, this may be inferred from trusted proxy headers.

[Node.js Reference](https://nodejs.org/api/net.html#socketremotefamily)

### `port`

The remote port of the client that sent the request.

When `trustProxy` is enabled, this may come from trusted `Forwarded` headers.

[Node.js Reference](https://nodejs.org/api/net.html#socketremoteport)