---
title: LazyContent
---

# LazyContent

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/lazy-file/src/lib/lazy-file.ts#L6" target="_blank">View Source</a>

## Summary

A streaming interface for blob/file content.

## Signature

```ts
interface LazyContent {
  byteLength: number;
  stream(start: number, end: number): ReadableStream<Uint8Array<ArrayBuffer>>;
}

```

## Properties

### byteLength

The total length of the content.

## Methods

### stream(start: number, end: number): ReadableStream<Uint8Array<ArrayBuffer>>

Returns a stream that can be used to read the content. When given, the `start` index is
inclusive indicating the index of the first byte to read. The `end` index is exclusive
indicating the index of the first byte not to read.

#### start

The start index (inclusive)

#### end

The end index (exclusive)