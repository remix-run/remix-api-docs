---
title: LazyFile
---

# LazyFile

<a href="https://github.com/remix-run/remix/blob/main/packages/lazy-file/src/lib/lazy-file.ts#L198" target="_blank">View Source</a>

## Summary

A lazy, streaming alternative to [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).

**Important:** Since `LazyFile` is not a `File` subclass, you cannot pass it directly to APIs
that expect a real `File` (like `new Response(file)` or `formData.append('file', file)`).
Instead, use one of:

- `.stream()` - Returns a `ReadableStream` for `Response` and other streaming APIs
- `.toFile()` - Returns a `Promise<File>` for non-streaming APIs that require a complete `File` (e.g. `FormData`)
- `.toBlob()` - Returns a `Promise<Blob>` for non-streaming APIs that require a complete `Blob` (e.g. `FormData`)

[MDN `File` Reference](https://developer.mozilla.org/en-US/docs/Web/API/File)

## Signature

```ts
class LazyFile {
  constructor(
    parts: LazyContent | BlobPartLike[],
    name: string,
    options: LazyFileOptions,
  ): LazyFile;

  // Properties
  lastModified: number;
  name: string;
  webkitRelativePath: "";

  // Accessors
  get [toStringTag](): string;
  get size(): number;
  get type(): string;

  // Methods
  arrayBuffer(): Promise<ArrayBuffer>;
  bytes(): Promise<Uint8Array<ArrayBuffer>>;
  slice(start: number, end: number, contentType: string): LazyBlob;
  stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
  text(): Promise<string>;
  toBlob(): Promise<Blob>;
  toFile(): Promise<File>;
  toString(): never;
}

```

## Constructor Params

### parts

The file parts or lazy content

### name

The name of the file

### options

Options for the file

## Properties

### lastModified

The last modified timestamp of the file in milliseconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified)

### name

The name of the file.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/File/name)

### webkitRelativePath

Always empty string. This property exists only for structural compatibility with the native
`File` interface. It's a browser-specific property for files selected via `<input type="file">`
with the `webkitdirectory` attribute, which doesn't apply to programmatically created files.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath)

## Accessors

### [toStringTag]

The brand string exposed by `Object.prototype.toString.call()`.

### size

The size of the file in bytes.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/size)

### type

The MIME type of the file.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type)

## Methods

### arrayBuffer(): Promise<ArrayBuffer>

Returns the file's content as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer)

### bytes(): Promise<Uint8Array<ArrayBuffer>>

Returns the file's contents as a byte array.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/bytes)

### slice(start: number, end: number, contentType: string): LazyBlob

Returns a new `LazyBlob` that contains the data in the specified range.

Note: Like the native `File.slice()`, this returns a `Blob` (not a `File`).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice)

#### start

The start index (inclusive)

#### end

The end index (exclusive)

#### contentType

The content type of the new blob

### stream(): ReadableStream<Uint8Array<ArrayBuffer>>

Returns a stream that can be used to read the file's contents.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream)

### text(): Promise<string>

Returns the file's contents as a string.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text)

### toBlob(): Promise<Blob>

Converts this `LazyFile` to a native `Blob`.

**Warning:** This reads the entire content into memory, which defeats the purpose of using
a lazy file for large files. Only use this for non-streaming APIs that require a complete `Blob`.
Use `.stream()` to get a `ReadableStream` for `Response` and other streaming APIs.

### toFile(): Promise<File>

Converts this `LazyFile` to a native `File`.

**Warning:** This reads the entire content into memory, which defeats the purpose of using
a lazy file for large files. Only use this for non-streaming APIs that require a complete `File`
(e.g. `FormData`). For streaming, use `.stream()` instead.

### toString(): never