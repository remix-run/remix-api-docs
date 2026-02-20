---
title: MultipartParser
---

# MultipartParser

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.ts#L158" target="_blank">View Source</a>

## Summary

A streaming parser for `multipart/*` HTTP messages.

## Constructor

### boundary

The boundary string used to separate parts

### options

Options for the parser

## Properties

### boundary

### maxFileSize

### maxHeaderSize

## Methods

### finish(): void

Should be called after all data has been written to the parser.

Note: This will throw if the multipart message is incomplete or
wasn't properly terminated.

### write(chunk: Uint8Array): Generator<MultipartPart, void, unknown>

Write a chunk of data to the parser.

#### chunk

A chunk of data to write to the parser