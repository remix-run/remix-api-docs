---
title: TerminalInputStream
source: https://github.com/remix-run/remix/blob/main/packages/terminal/src/lib/terminal.ts#L8
---

# TerminalInputStream

## Summary

Input stream shape used for terminal interactivity detection.

## Signature

```ts
interface TerminalInputStream {
  isTTY?: boolean;
}

```

## Properties

### isTTY

Whether the input stream is attached to a TTY.