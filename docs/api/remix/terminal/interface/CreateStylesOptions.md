---
title: CreateStylesOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/terminal/src/lib/styles.ts#L214
---

# CreateStylesOptions

## Summary

Options used to create terminal style helpers.

## Signature

```ts
interface CreateStylesOptions {
  colors?: boolean;
  env?: TerminalEnvironment;
  stream?: { isTTY?: boolean };
}

```

## Properties

### colors

Explicitly enables or disables ANSI styles instead of using automatic color detection.

### env

Environment variables used for color detection (defaults to `process.env`).

### stream

Output stream whose TTY support should be used for color detection (defaults to `process.stdout`).