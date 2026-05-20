---
title: TerminalOutputStream
---

# TerminalOutputStream

## Summary

Output stream shape used for terminal writes and TTY detection.

## Signature

```ts
interface TerminalOutputStream {
  isTTY?: boolean;
  write(chunk: string): unknown;
}

```

## Properties

### `isTTY`

Whether the output stream is attached to a TTY.

## Methods

### `write(chunk: string): unknown`

Writes a chunk of text to the output stream.

#### Parameters

##### `chunk`

Text chunk to write.