---
title: FileUpload
---

# FileUpload

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/form-data-parser/src/lib/form-data.ts#L31" target="_blank">View Source</a>

## Summary

A file that was uploaded as part of a `multipart/form-data` request.

## Signature

```ts
interface FileUpload {
  fieldName: string;
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  bytes(): Promise<Uint8Array<ArrayBuffer>>;
  slice(start: number, end: number, contentType: string): Blob;
  stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
  text(): Promise<string>;
}

```

## Properties

### fieldName

The name of the `<input>` field used to upload the file.

### lastModified

The **`lastModified`** read-only property of the File interface provides the last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified)

### name

The **`name`** read-only property of the File interface returns the name of the file represented by a File object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name)

### size

The **`size`** read-only property of the Blob interface returns the size of the Blob or File in bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)

### type

The **`type`** read-only property of the Blob interface returns the MIME type of the file.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)

### webkitRelativePath

The **`webkitRelativePath`** read-only property of the File interface contains a string which specifies the file's path relative to the directory selected by the user in an input element with its `webkitdirectory` attribute set.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)

## Methods

### arrayBuffer(): Promise<ArrayBuffer>

The **`arrayBuffer()`** method of the Blob interface returns a Promise that resolves with the contents of the blob as binary data contained in an ArrayBuffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer)

### bytes(): Promise<Uint8Array<ArrayBuffer>>

The **`bytes()`** method of the Blob interface returns a Promise that resolves with a Uint8Array containing the contents of the blob as an array of bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes)

### slice(start: number, end: number, contentType: string): Blob

The **`slice()`** method of the Blob interface creates and returns a new `Blob` object which contains data from a subset of the blob on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice)

#### start

#### end

#### contentType

### stream(): ReadableStream<Uint8Array<ArrayBuffer>>

The **`stream()`** method of the Blob interface returns a ReadableStream which upon reading returns the data contained within the `Blob`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream)

### text(): Promise<string>

The **`text()`** method of the string containing the contents of the blob, interpreted as UTF-8.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)