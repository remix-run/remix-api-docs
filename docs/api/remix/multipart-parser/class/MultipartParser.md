---
title: "MultipartParser"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/multipart-parser/src/lib/multipart.ts#L218"
---

# MultipartParser

## Summary

A streaming parser for `multipart/*` HTTP messages.

## Signature

```ts
class MultipartParser {
  constructor(boundary: string, options: MultipartParserOptions): MultipartParser

  // Properties
  boundary: string
  maxFileSize: number
  maxHeaderSize: number
  maxParts: number
  maxTotalSize: number

  // Methods
  finish(): void
  write(chunk: Uint8Array): Generator<MultipartPart, void, unknown>
}

```

## Constructor

### Parameters

#### `boundary`

The boundary string used to separate parts

#### `options`

Options for the parser

## Properties

### `boundary`

Boundary string used to detect part separators.

### `maxFileSize`

Maximum file size allowed for each multipart part.

### `maxHeaderSize`

Maximum header size allowed for each multipart part.

### `maxParts`

Maximum number of parts allowed in a multipart message.

### `maxTotalSize`

Maximum aggregate content size allowed across all parts.

## Methods

### `finish(): void`

Validate completion after all chunks have been written to the parser.

Throws if the message is incomplete or its closing delimiter is malformed,
even if MultipartParser.write has already yielded the final part.



### `write(chunk: Uint8Array): Generator<MultipartPart, void, unknown>`

Write a chunk of data to the parser.

The final part is yielded when both closing hyphens arrive. Consume all chunks
and call MultipartParser.finish to validate the complete message;
malformed closing suffixes may throw after the final part has been yielded.

#### Parameters

##### `chunk`

A chunk of data to write to the parser