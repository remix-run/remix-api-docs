---
title: parseTarHeader
---

# parseTarHeader

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L96" target="_blank">View Source</a>

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

### block

The tar header block

### options

Options that control how the header is parsed

## Returns

The parsed tar header