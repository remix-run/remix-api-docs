---
title: TarParser
---

# TarParser

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L222" target="_blank">View Source</a>

## Summary

A parser for tar archives.

## Constructor

### options

Options that control how the tar archive is parsed

## Methods

### parse(archive: TarArchiveSource, handler: TarEntryHandler): Promise<void>

Parse a stream/buffer tar archive and call the given handler for each entry it contains.
Resolves when the parse is finished and all handlers resolve.

#### archive

The tar archive source data

#### handler

A function to call for each entry in the archive