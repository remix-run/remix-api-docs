---
title: parseMultipart
---

# parseMultipart

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.node.ts#L22" target="_blank">View Source</a>

## Summary

Parse a `multipart/*` Node.js `Buffer` and yield each part as a `MultipartPart` object.

Note: This is a low-level API that requires manual handling of the content and boundary. If you're
building a web server, consider using `parseMultipartRequest(request)` instead.

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

### message

The multipart message as a `Buffer` or an iterable of `Buffer` chunks

### options

Options for the parser

## Returns

A generator yielding `MultipartPart` objects