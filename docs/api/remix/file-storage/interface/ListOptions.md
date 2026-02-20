---
title: ListOptions
---

# ListOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/file-storage/src/lib/file-storage.ts#L139" target="_blank">View Source</a>

## Summary

Options for listing files in storage.

## Signature

```ts
interface ListOptions {
  cursor?: string;
  includeMetadata?: boolean;
  limit?: number;
  prefix?: string;
}

```

## Properties

### cursor

An opaque string that allows you to paginate over the keys in storage.

### includeMetadata

If `true`, include file metadata in the result.

### limit

The maximum number of files to return.

### prefix

Only return files with keys that start with this prefix.