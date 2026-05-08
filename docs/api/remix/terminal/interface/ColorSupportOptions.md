---
title: ColorSupportOptions
source: https://github.com/remix-run/remix/blob/main/packages/terminal/src/lib/env.ts#L9
---

# ColorSupportOptions

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

### `env`

Environment variables used for color detection (defaults to `process.env`).

### `stream`

Output stream whose TTY support should be used for color detection (defaults to `process.stdout`).