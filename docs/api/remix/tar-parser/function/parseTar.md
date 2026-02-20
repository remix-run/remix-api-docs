---
title: parseTar
---

# parseTar

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L193" target="_blank">View Source</a>

## Summary

Parse a tar archive and call the given handler for each entry it contains.

```ts
import { parseTar } from 'remix/tar-parser';

await parseTar(archive, (entry) => {
 console.log(entry.name);
});
```

## Signature

```ts
function parseTar(
  archive: TarArchiveSource,
  options: ParseTarHeaderOptions,
  handler: TarEntryHandler,
): Promise<void>;

```

## Params

### archive

The tar archive source data

### options

### handler

A function to call for each entry in the archive

## Returns

A promise that resolves when the parse is finished