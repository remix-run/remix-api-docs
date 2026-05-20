---
title: OpenLazyFileOptions
---

# OpenLazyFileOptions

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

### `lastModified`

Overrides the last modified timestamp of the file.

### `name`

Overrides the name of the file.

### `type`

Overrides the MIME type of the file.