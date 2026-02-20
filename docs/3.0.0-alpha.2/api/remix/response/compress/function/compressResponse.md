---
title: compressResponse
---

# compressResponse

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/response/src/lib/compress.ts#L78" target="_blank">View Source</a>

## Summary

Compresses a Response based on the client's Accept-Encoding header.

Compression is skipped for:
- Responses with no Accept-Encoding header (RFC 7231)
- Empty responses
- Already compressed responses
- Responses with Content-Length below threshold (default: 1024 bytes)
- Responses with Cache-Control: no-transform
- Responses advertising range support (Accept-Ranges: bytes)
- Partial content responses (206 status)

When compressing, this function:
- Sets Content-Encoding header
- Removes Content-Length header
- Sets Accept-Ranges to 'none'
- Adds 'Accept-Encoding' to Vary header
- Converts strong ETags to weak ETags (per RFC 7232)

## Signature

```ts
function compressResponse(
  response: Response,
  request: Request,
  options: CompressResponseOptions,
): Promise<Response>;

```

## Params

### response

The response to compress

### request

The request (needed to check Accept-Encoding header)

### options

Optional compression settings

## Returns

A compressed Response or the original if no compression is suitable