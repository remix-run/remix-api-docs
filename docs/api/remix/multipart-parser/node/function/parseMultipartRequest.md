---
title: parseMultipartRequest
---

# parseMultipartRequest

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/multipart-parser/src/lib/multipart.node.ts#L69" target="_blank">View Source</a>

## Summary

Parse a multipart Node.js request and yield each part as a MultipartPart object.

## Signature

```ts
function parseMultipartRequest(
  req: IncomingMessage,
  options: MultipartParserOptions,
): AsyncGenerator<MultipartPart, void, unknown>;

```

## Params

### req

The Node.js `http.IncomingMessage` object containing multipart data

### options

Options for the parser, such as `maxHeaderSize`, `maxFileSize`, `maxParts`,
and `maxTotalSize`

## Returns

An async generator yielding [`MultipartPart`](/api/remix/multipart-parser/class/MultipartPart/) objects