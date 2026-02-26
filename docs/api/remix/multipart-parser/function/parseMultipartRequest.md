---
title: parseMultipartRequest
---

# parseMultipartRequest

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart-request.ts#L34" target="_blank">View Source</a>

## Summary

Parse a multipart [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and yield each part as
a `MultipartPart` object. Useful in HTTP server contexts for handling incoming `multipart/*` requests.

## Signature

```ts
function parseMultipartRequest(
  request: Request,
  options: MultipartParserOptions,
): AsyncGenerator<MultipartPart, void, unknown>;

```

## Params

### request

The `Request` object containing multipart data

### options

Optional parser options, such as `maxHeaderSize` and `maxFileSize`

## Returns

An async generator yielding `MultipartPart` objects