---
title: TarEntry
---

# TarEntry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L454" target="_blank">View Source</a>

## Summary

An entry in a tar archive.

## Constructor

### header

The header info for this entry

### body

The entry's content as a stream

## Properties

### body

The content of this entry as a `ReadableStream<Uint8Array>`.

### bodyUsed

Whether the body of this entry has been consumed.

### header

The raw header info associated with this entry.

### name

The name of this entry.

### size

The size of this entry in bytes.

## Methods

### arrayBuffer(): Promise<ArrayBuffer>

The content of this entry as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

### bytes(): Promise<Uint8Array<ArrayBufferLike>>

The content of this entry buffered into a single typed array.

### text(): Promise<string>

The content of this entry as a string.

Note: Do not use this for binary data, use `await entry.bytes()` or stream `entry.body` directly instead.