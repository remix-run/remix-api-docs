---
title: parseMultipart
---

# parseMultipart

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.ts#L85" target="_blank">View Source</a>

## Summary

Parse a `multipart/*` message from a buffer/iterable and yield each part as a `MultipartPart` object.

Note: This is a low-level API that requires manual handling of the content and boundary. If you're
building a web server, consider using `parseMultipartRequest(request)` instead.

## Signature

```ts
function parseMultipart(
  message:
    | Uint8Array<ArrayBufferLike>
    | Iterable<Uint8Array<ArrayBufferLike>, any, any>,
  options: ParseMultipartOptions,
): Generator<MultipartPart, void, unknown>;

```

## Params

### message

The multipart message as a `Uint8Array` or an iterable of `Uint8Array` chunks

### options

Options for the parser

## Returns

A generator that yields `MultipartPart` objects