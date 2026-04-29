---
title: TerminalInputStream
---

# TerminalInputStream

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/terminal/src/lib/terminal.ts#L8" target="_blank">View Source</a>

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