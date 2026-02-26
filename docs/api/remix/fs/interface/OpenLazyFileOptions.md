---
title: OpenLazyFileOptions
---

# OpenLazyFileOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fs/src/lib/fs.ts#L9" target="_blank">View Source</a>

## Summary

Options for opening a lazy file from the local filesystem.

## Signature

```ts
interface OpenLazyFileOptions {
  lastModified?: number;
  name?: string;
  type?: string;
}

```

## Properties

### lastModified

Overrides the last modified timestamp of the file.

### name

Overrides the name of the file.

### type

Overrides the MIME type of the file.