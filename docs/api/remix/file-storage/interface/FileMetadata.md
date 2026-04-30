---
title: FileMetadata
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/file-storage/src/lib/file-storage.ts#L117
---

# FileMetadata

## Summary

Metadata about a file in storage.

## Signature

```ts
interface FileMetadata {
  key: string;
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

```

## Properties

### key

The key of the file in storage.

### lastModified

The last modified time of the file (in ms since the Unix epoch).

### name

The name of the file.

### size

The size of the file in bytes.

### type

The MIME type of the file.