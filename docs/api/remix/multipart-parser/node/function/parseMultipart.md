---
title: parseMultipart
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/multipart-parser/src/lib/multipart.node.ts#L23
---

# parseMultipart

## Summary

Parse a `multipart/*` Node.js `Buffer` and yield each part as a MultipartPart object.

Note: This is a low-level API that requires manual handling of the content and boundary.
If you're building a web server, consider using parseMultipartRequest instead.

## Signature

```ts
function parseMultipart(
  message:
    | Buffer<ArrayBufferLike>
    | Iterable<Buffer<ArrayBufferLike>, any, any>,
  options: ParseMultipartOptions,
): Generator<MultipartPart, void, unknown>;

```

## Params

### `message`

The multipart message as a `Buffer` or an iterable of `Buffer` chunks

### `options`

Options for the parser

## Returns

A generator yielding [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) objects