---
title: MultipartPart
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart.ts#L530
---

# MultipartPart

## Summary

A part of a `multipart/*` HTTP message.

## Signature

```ts
class MultipartPart {
  constructor(
    header: Uint8Array,
    content: Uint8Array<ArrayBufferLike>[],
  ): MultipartPart;

  // Properties
  content: Uint8Array<ArrayBufferLike>[];

  // Accessors
  get arrayBuffer(): ArrayBuffer;
  get bytes(): Uint8Array;
  get filename(): string | undefined;
  get headers(): MultipartHeaders;
  get isFile(): boolean;
  get isText(): boolean;
  get mediaType(): string | undefined;
  get name(): string | undefined;
  get size(): number;
  get text(): string;
}

```

## Constructor

### Parameters

#### `header`

The raw header bytes

#### `content`

The content chunks

## Properties

### `content`

The raw content of this part as an array of `Uint8Array` chunks.

## Accessors

### `arrayBuffer`

The content of this part as an `ArrayBuffer`.

### `bytes`

The content of this part as a single `Uint8Array`. In `multipart/form-data` messages, this is useful
for reading the value of files that were uploaded using `<input type="file">` fields.

### `filename`

The filename of the part, if it is a file upload.

### `headers`

The decoded headers associated with this part, keyed by lower-case header name.

### `isFile`

True if this part originated from a file upload.

### `isText`

True if this part originated from a text input field in a form submission.

### `mediaType`

The media type of the part.

### `name`

The name of the part, usually the `name` of the field in the `<form>` that submitted the request.

### `size`

The size of the content in bytes.

### `text`

The content of this part as a string. In `multipart/form-data` messages, this is useful for
reading the value of parts that originated from `<input type="text">` fields.

Note: Do not use this for binary data, use `part.bytes` or `part.arrayBuffer` instead.