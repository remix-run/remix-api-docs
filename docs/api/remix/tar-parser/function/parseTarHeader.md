---
title: "parseTarHeader"
source: "https://github.com/remix-run/remix/blob/main/packages/tar-parser/src/lib/tar.ts#L205"
---

# parseTarHeader

## Summary

Parses a tar header block.
With the default `relative` path policy, throws [`TarParseError`](/api/remix/tar-parser/class/TarParseError/) for invalid
entry names or link targets, including paths that traverse above the archive root.

## Signature

```ts
function parseTarHeader(block: Uint8Array, options: ParseTarHeaderOptions): TarHeader

```

## Parameters

### `block`

The tar header block

### `options`

Options that control how the header is parsed

## Returns

The parsed tar header