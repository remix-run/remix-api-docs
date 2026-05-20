---
title: parseMultipart
---

# parseMultipart

## Summary

Parse a `multipart/*` Node.js `Buffer` and yield each part as a [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) object.

Note: This is a low-level API that requires manual handling of the content and boundary.
If you're building a web server, consider using [`parseMultipartRequest`](/api/remix/multipart-parser/node/function/parseMultipartRequest/) instead.

## Signature

```ts
function parseMultipart(
  message:
    | Buffer<ArrayBufferLike>
    | Iterable<Buffer<ArrayBufferLike>, any, any>,
  options: ParseMultipartOptions,
): Generator<MultipartPart, void, unknown>;

```

## Parameters

### `message`

The multipart message as a `Buffer` or an iterable of `Buffer` chunks

### `options`

Options for the parser

## Returns

A generator yielding [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) objects