---
title: StaticFilesOptions
---

# StaticFilesOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/static-middleware/src/lib/static.ts#L20" target="_blank">View Source</a>

## Summary

Options for the `staticFiles` middleware.

## Signature

```ts
interface StaticFilesOptions {
  acceptRanges?: boolean | AcceptRangesFunction;
  cacheControl?: string;
  digest?: AlgorithmIdentifier | FileDigestFunction<File>;
  etag?: false | "strong" | "weak";
  filter?: (path: string) => boolean;
  index?: boolean | string[];
  lastModified?: boolean;
  listFiles?: boolean;
}

```

## Properties

### acceptRanges

Whether to support HTTP Range requests for partial content.

Can be a boolean or a function that receives the file.
When enabled, includes Accept-Ranges header and handles Range requests
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

### filter

Filter function to determine which files should be served.

### index

Files to try and serve as the index file when the request path targets a directory.

- `true`: Use default index files `['index.html', 'index.htm']`
- `false`: Disable index file serving
- `string[]`: Custom list of index files to try in order

### lastModified

Whether to include `Last-Modified` headers.

### listFiles

Whether to return an HTML page listing the files in a directory when the request path
targets a directory. If both this and `index` are set, `index` takes precedence.