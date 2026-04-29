---
title: TerminalOutputStream
---

# TerminalOutputStream

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/terminal/src/lib/terminal.ts#L18" target="_blank">View Source</a>

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

### isTTY

Whether the output stream is attached to a TTY.

## Methods

### write(chunk: string): unknown

Writes a chunk of text to the output stream.

#### chunk

Text chunk to write.