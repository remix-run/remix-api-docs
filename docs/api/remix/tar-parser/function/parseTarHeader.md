---
title: parseTarHeader
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/tar-parser/src/lib/tar.ts#L147
---

# parseTarHeader

## Summary

Parses a tar header block.

## Signature

```ts
function parseTarHeader(
  block: Uint8Array,
  options: ParseTarHeaderOptions,
): TarHeader;

```

## Params

### `block`

The tar header block

### `options`

Options that control how the header is parsed

## Returns

The parsed tar header