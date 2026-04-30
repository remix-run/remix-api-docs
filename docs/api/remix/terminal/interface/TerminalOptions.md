---
title: TerminalOptions
source: https://github.com/remix-run/remix/blob/main/packages/terminal/src/lib/terminal.ts#L35
---

# TerminalOptions

## Summary

Options used to create a terminal abstraction.

## Signature

```ts
interface TerminalOptions {
  colors?: boolean;
  env?: TerminalEnvironment;
  stderr?: TerminalOutputStream;
  stdin?: TerminalInputStream;
  stdout?: TerminalOutputStream;
  stream?: { isTTY?: boolean };
}

```

## Properties

### colors

Explicitly enables or disables ANSI styles instead of using automatic color detection.

### env

Environment variables used for color detection (defaults to `process.env`).

### stderr

Output stream used for error output (defaults to `process.stderr`).

### stdin

Input stream used to detect whether the terminal is interactive (defaults to `process.stdin`).

### stdout

Output stream used for normal output (defaults to `process.stdout`).

### stream

Output stream whose TTY support should be used for color detection (defaults to `process.stdout`).