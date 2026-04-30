---
title: ParseTarHeaderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/tar-parser/src/lib/tar.ts#L123
---

# ParseTarHeaderOptions

## Summary

Options for parsing tar headers.

## Signature

```ts
interface ParseTarHeaderOptions {
  allowUnknownFormat?: boolean;
  filenameEncoding?: string;
}

```

## Properties

### allowUnknownFormat

Set `false` to disallow unknown header formats.

### filenameEncoding

The label (encoding) for filenames.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings)