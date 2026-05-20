---
title: parseTarHeader
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

## Parameters

### `block`

The tar header block

### `options`

Options that control how the header is parsed

## Returns

The parsed tar header