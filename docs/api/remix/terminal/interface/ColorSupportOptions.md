---
title: ColorSupportOptions
---

# ColorSupportOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/terminal/src/lib/env.ts#L9" target="_blank">View Source</a>

## Summary

Options that control ANSI color detection.

## Signature

```ts
interface ColorSupportOptions {
  env?: TerminalEnvironment;
  stream?: { isTTY?: boolean };
}

```

## Properties

### env

Environment variables used for color detection (defaults to `process.env`).

### stream

Output stream whose TTY support should be used for color detection (defaults to `process.stdout`).