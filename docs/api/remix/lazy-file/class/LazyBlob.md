---
title: LazyBlob
---

# LazyBlob

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/lazy-file/src/lib/lazy-file.ts#L53" target="_blank">View Source</a>

## Summary

A lazy, streaming alternative to [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

**Important:** Since `LazyBlob` is not a `Blob` subclass, you cannot pass it directly to APIs
that expect a real `Blob` (like `new Response(blob)` or `formData.append('file', blob)`).
Instead, use one of:

- `.stream()` - Returns a `ReadableStream` for `Response` and other streaming APIs
- `.toBlob()` - Returns a `Promise<Blob>` for non-streaming APIs that require a complete `Blob` (e.g. `FormData`)

[MDN `Blob` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

## Constructor

### parts

The blob parts or lazy content

### options

Options for the blob

## Properties

### [toStringTag]

### size

The size of the blob in bytes.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/size)

### type

The MIME type of the blob.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type)

## Methods

### arrayBuffer(): Promise<ArrayBuffer>

Returns the blob's contents as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer)

### bytes(): Promise<Uint8Array<ArrayBuffer>>

Returns the blob's contents as a byte array.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/bytes)

### slice(start: number, end: number, contentType: string): LazyBlob

Returns a new `LazyBlob` that contains the data in the specified range.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice)

#### start

The start index (inclusive)

#### end

The end index (exclusive)

#### contentType

The content type of the new blob

### stream(): ReadableStream<Uint8Array<ArrayBuffer>>

Returns a stream that can be used to read the blob's contents.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream)

### text(): Promise<string>

Returns the blob's contents as a string.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text)

### toBlob(): Promise<Blob>

Converts this `LazyBlob` to a native `Blob`.

**Warning:** This reads the entire content into memory, which defeats the purpose of using
a lazy blob for large files. Only use this for non-streaming APIs that require a complete `Blob`.
Use `.stream()` to get a `ReadableStream` for `Response` and other streaming APIs.

### toString(): never