---
title: FileResponseOptions
---

# FileResponseOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/response/src/lib/file.ts#L52" target="_blank">View Source</a>

## Summary

Options for creating a file response.

## Signature

```ts
interface FileResponseOptions<file> {
  acceptRanges?: boolean;
  cacheControl?: string;
  digest?: AlgorithmIdentifier | FileDigestFunction<file>;
  etag?: false | "strong" | "weak";
  lastModified?: boolean;
}

```

## Properties

### acceptRanges

Whether to support HTTP `Range` requests for partial content.

When enabled, includes `Accept-Ranges` header and handles `Range` requests
with 206 Partial Content responses.

Defaults to enabling ranges only for non-compressible MIME types,
as defined by `isCompressibleMimeType()` from `@remix-run/mime`.

Note: Range requests and compression are mutually exclusive. When
`Accept-Ranges: bytes` is present in the response headers, the compression
middleware will not compress the response. This is why the default behavior
enables ranges only for non-compressible types.

### cacheControl

Cache-Control header value. If not provided, no Cache-Control header will be set.

### digest

Hash algorithm or custom digest function for strong ETags.

- String: Web Crypto API algorithm name ('SHA-256', 'SHA-384', 'SHA-512', 'SHA-1').
  Note: Using strong ETags will buffer the entire file into memory before hashing.
  Consider using weak ETags (default) or a custom digest function for large files.
- Function: Custom digest computation that receives a file and returns the digest string

Only used when `etag: 'strong'`. Ignored for weak ETags.

### etag

ETag generation strategy.

- `'weak'`: Generates weak ETags based on file size and last modified time (`W/"<size>-<mtime>"`)
- `'strong'`: Generates strong ETags by hashing file content (requires digest computation)
- `false`: Disables ETag generation

### lastModified

Whether to include `Last-Modified` headers.