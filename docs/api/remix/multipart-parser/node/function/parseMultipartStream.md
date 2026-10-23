---
title: "parseMultipartStream"
source: "https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart.node.ts#L43"
---

# parseMultipartStream

## Summary

Parse a `multipart/*` Node.js `Readable` stream and yield each part as a
[`MultipartPart`](/multipart-parser/class/MultipartPart/) object.

Note: This is a low-level API that requires manual handling of the stream and boundary.
If you're building a web server, consider using [`parseMultipartRequest`](/multipart-parser/node/function/parseMultipartRequest/) instead.

## Signature

```ts
function parseMultipartStream(
  stream: Readable,
  options: ParseMultipartOptions,
): AsyncGenerator<MultipartPart, void, unknown>

```

## Parameters

### `stream`

A Node.js `Readable` stream containing multipart data

### `options`

Options for the parser

## Returns

An async generator yielding [`MultipartPart`](/multipart-parser/class/MultipartPart/) objects