---
title: TarEntry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/tar-parser/src/lib/tar.ts#L506
---

# TarEntry

## Summary

An entry in a tar archive.

## Signature

```ts
class TarEntry {
  constructor(
    header: TarHeader,
    body: ReadableStream<Uint8Array<ArrayBufferLike>>,
  ): TarEntry;

  // Accessors
  get body(): ReadableStream<Uint8Array<ArrayBufferLike>>;
  get bodyUsed(): boolean;
  get header(): TarHeader;
  get name(): string;
  get size(): number;

  // Methods
  arrayBuffer(): Promise<ArrayBuffer>;
  bytes(): Promise<Uint8Array<ArrayBufferLike>>;
  text(): Promise<string>;
}

```

## Constructor Params

### `header`

The header info for this entry

### `body`

The entry's content as a stream

## Accessors

### `body`

The content of this entry as a `ReadableStream<Uint8Array>`.

### `bodyUsed`

Whether the body of this entry has been consumed.

### `header`

The raw header info associated with this entry.

### `name`

The name of this entry.

### `size`

The size of this entry in bytes.

## Methods

### `arrayBuffer(): Promise<ArrayBuffer>`

The content of this entry as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

### `bytes(): Promise<Uint8Array<ArrayBufferLike>>`

The content of this entry buffered into a single typed array.

### `text(): Promise<string>`

The content of this entry as a string.

Note: Do not use this for binary data, use `await entry.bytes()` or stream `entry.body` directly instead.