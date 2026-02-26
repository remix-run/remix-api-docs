---
title: parseMultipartStream
---

# parseMultipartStream

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.node.ts#L39" target="_blank">View Source</a>

## Summary

Parse a `multipart/*` Node.js `Readable` stream and yield each part as a `MultipartPart` object.

Note: This is a low-level API that requires manual handling of the stream and boundary. If you're
building a web server, consider using `parseMultipartRequest(request)` instead.

## Signature

```ts
function parseMultipartStream(
  stream: Readable,
  options: ParseMultipartOptions,
): AsyncGenerator<MultipartPart, void, unknown>;

```

## Params

### stream

A Node.js `Readable` stream containing multipart data

### options

Options for the parser

## Returns

An async generator yielding `MultipartPart` objects