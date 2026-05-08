---
title: parseMultipartRequest
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart-request.ts#L37
---

# parseMultipartRequest

## Summary

Parse a multipart [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)
and yield each part as a [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) object. Useful in HTTP server contexts
for handling incoming `multipart/*` requests.

## Signature

```ts
function parseMultipartRequest(
  request: Request,
  options: MultipartParserOptions,
): AsyncGenerator<MultipartPart, void, unknown>;

```

## Parameters

### `request`

The `Request` object containing multipart data

### `options`

Optional parser options, such as `maxHeaderSize`, `maxFileSize`, `maxParts`,
and `maxTotalSize`

## Returns

An async generator yielding [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) objects