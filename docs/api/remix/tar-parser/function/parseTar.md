---
title: "parseTar"
source: "https://github.com/remix-run/remix/blob/main/packages/tar-parser/src/lib/tar.ts#L414"
---

# parseTar

## Summary

Parse a tar archive and call the given handler for each entry it contains.
Applies the configured path policy, as in [`parseTarHeader`](/api/remix/tar-parser/function/parseTarHeader/), before
calling the handler.

```ts
import { parseTar } from 'remix/tar-parser';

await parseTar(archive, (entry) => {
 console.log(entry.name);
});
```

## Signature

```ts
function parseTar(archive: TarArchiveSource, handler: TarEntryHandler): Promise<void>

function parseTar(
  archive: TarArchiveSource,
  options: ParseTarOptions,
  handler: TarEntryHandler,
): Promise<void>

```

## Parameters

### `archive`

The tar archive source data

### `options`

Options that control parsing and size limits

### `handler`

A function to call for each entry in the archive

## Returns

A promise that resolves when parsing and all handlers finish