---
title: MultipartParser
---

# MultipartParser

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/multipart-parser/src/lib/multipart.ts#L209" target="_blank">View Source</a>

## Summary

A streaming parser for `multipart/*` HTTP messages.

## Signature

```ts
class MultipartParser {
  constructor(
    boundary: string,
    options: MultipartParserOptions,
  ): MultipartParser;

  // Properties
  boundary: string;
  maxFileSize: number;
  maxHeaderSize: number;
  maxParts: number;
  maxTotalSize: number;

  // Methods
  finish(): void;
  write(chunk: Uint8Array): Generator<MultipartPart, void, unknown>;
}

```

## Constructor Params

### boundary

The boundary string used to separate parts

### options

Options for the parser

## Properties

### boundary

Boundary string used to detect part separators.

### maxFileSize

Maximum file size allowed for each multipart part.

### maxHeaderSize

Maximum header size allowed for each multipart part.

### maxParts

Maximum number of parts allowed in a multipart message.

### maxTotalSize

Maximum aggregate content size allowed across all parts.

## Methods

### finish(): void

Should be called after all data has been written to the parser.

Note: This will throw if the multipart message is incomplete or
wasn't properly terminated.

### write(chunk: Uint8Array): Generator<MultipartPart, void, unknown>

Write a chunk of data to the parser.

#### chunk

A chunk of data to write to the parser