---
title: ParseTarHeaderOptions
---

# ParseTarHeaderOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L72" target="_blank">View Source</a>

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