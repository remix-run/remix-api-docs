---
title: getRemixTestHelpText
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/config.ts#L308
---

# getRemixTestHelpText

## Summary

Returns the formatted `remix-test --help` text. Useful for embedding the
runner's CLI options in higher-level tooling.

## Signature

```ts
function getRemixTestHelpText(_target: WriteStream): string;

```

## Parameters

### `_target`

Output stream the help text will be written to. Reserved
               for future use (e.g. width-aware formatting); currently
               unused.

## Returns

The help text as a single string ready to write to a stream.