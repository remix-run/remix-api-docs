---
title: TarParser
---

# TarParser

## Summary

A parser for tar archives.

## Signature

```ts
class TarParser {
  constructor(options: ParseTarHeaderOptions): TarParser;

  // Methods
  parse(archive: TarArchiveSource, handler: TarEntryHandler): Promise<void>;
}

```

## Constructor

### Parameters

#### `options`

Options that control how the tar archive is parsed

## Methods

### `parse(archive: TarArchiveSource, handler: TarEntryHandler): Promise<void>`

Parse a stream/buffer tar archive and call the given handler for each entry it contains.
Resolves when the parse is finished and all handlers resolve.

#### Parameters

##### `archive`

The tar archive source data

##### `handler`

A function to call for each entry in the archive