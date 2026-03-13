---
title: CompressResponseOptions
---

# CompressResponseOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/response/src/lib/compress.ts#L23" target="_blank">View Source</a>

## Summary

Configuration for negotiated response compression in compressResponse.

## Signature

```ts
interface CompressResponseOptions {
  brotli?: BrotliOptions;
  encodings?: Encoding[];
  threshold?: number;
  zlib?: ZlibOptions;
}

```

## Properties

### brotli

node:zlib options for Brotli compression.

For SSE responses (text/event-stream), `flush: BROTLI_OPERATION_FLUSH` is
automatically applied unless you explicitly set a flush value.

See: https://nodejs.org/api/zlib.html#class-brotlioptions

### encodings

Which encodings the server supports for negotiation in order of preference.
Supported encodings: 'br', 'gzip', 'deflate'.
Default: ['br', 'gzip', 'deflate']

### threshold

Minimum size in bytes to compress (only enforced if Content-Length is present).
If Content-Length is absent, compression is applied regardless of this threshold.

Default: 1024

### zlib

node:zlib options for gzip/deflate compression.

For SSE responses (text/event-stream), `flush: Z_SYNC_FLUSH` is automatically
applied unless you explicitly set a flush value.

See: https://nodejs.org/api/zlib.html#class-options