---
title: parseMultipartStream
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart.ts#L166
---

# parseMultipartStream

## Summary

Parse a `multipart/*` message stream and yield each part as a MultipartPart object.

Note: This is a low-level API that requires manual handling of the content and boundary.
If you're building a web server, consider using
import('./multipart-request.ts').parseMultipartRequest instead.

## Signature

```ts
function parseMultipartStream(
  stream: ReadableStream<Uint8Array<ArrayBufferLike>>,
  options: ParseMultipartOptions,
): AsyncGenerator<MultipartPart, void, unknown>;

```

## Params

### `stream`

A stream containing multipart data as a `ReadableStream<Uint8Array>`

### `options`

Options for the parser

## Returns

An async generator that yields [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) objects