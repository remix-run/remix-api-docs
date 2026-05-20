---
title: ServeTlsOptions
---

# ServeTlsOptions

## Summary

TLS certificate options for an HTTPS server.

## Signature

```ts
interface ServeTlsOptions {
  caFile?: string;
  certFile: string;
  keyFile: string;
  passphrase?: string;
}

```

## Properties

### `caFile`

The path to a CA certificate file to use for TLS.

### `certFile`

The path to the certificate file to use for TLS.

### `keyFile`

The path to the private key file to use for TLS.

### `passphrase`

The passphrase to use when the private key is encrypted.