---
title: ParseTarHeaderOptions
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

### `allowUnknownFormat`

Set `false` to disallow unknown header formats.

### `filenameEncoding`

The label (encoding) for filenames.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings)