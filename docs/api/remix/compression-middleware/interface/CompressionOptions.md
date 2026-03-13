---
title: CompressionOptions
---

# CompressionOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/compression-middleware/src/lib/compression.ts#L11" target="_blank">View Source</a>

## Summary

Configuration for automatic response compression.

## Signature

```ts
interface CompressionOptions {
  brotli?: BrotliOptions | ((response: Response) => BrotliOptions);
  encodings?: Encoding[] | ((response: Response) => Encoding[]);
  filterMediaType?: (mediaType: string) => boolean;
  threshold?: number;
  zlib?: ZlibOptions | ((response: Response) => ZlibOptions);
}

```

## Properties

### brotli

node:zlib options for Brotli compression.
Can be static or a function that returns options based on the response.

See: https://nodejs.org/api/zlib.html#class-brotlioptions

### encodings

Which encodings the server supports for negotiation in order of preference.
Can be static or a function that returns encodings based on the response.

Default: ['br', 'gzip', 'deflate']

### filterMediaType

Optional filter to control which responses get compressed based on media type.
If not provided, uses compressible media types from mime-db.

### threshold

Minimum size in bytes to compress (only enforced if Content-Length present).
Default: 1024

### zlib

node:zlib options for gzip/deflate compression.
Can be static or a function that returns options based on the response.

See: https://nodejs.org/api/zlib.html#class-options