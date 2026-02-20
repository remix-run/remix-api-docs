---
title: ClientAddress
---

# ClientAddress

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/node-fetch-server/src/lib/fetch-handler.ts#L4" target="_blank">View Source</a>

## Summary

Information about the client that sent a request.

## Signature

```ts
interface ClientAddress {
  address: string;
  family: "IPv4" | "IPv6";
  port: number;
}

```

## Properties

### address

The IP address of the client that sent the request.

[Node.js Reference](https://nodejs.org/api/net.html#socketremoteaddress)

### family

The family of the client IP address.

[Node.js Reference](https://nodejs.org/api/net.html#socketremotefamily)

### port

The remote port of the client that sent the request.

[Node.js Reference](https://nodejs.org/api/net.html#socketremoteport)