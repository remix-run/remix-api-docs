---
title: ListResult
---

# ListResult

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/file-storage/src/lib/file-storage.ts#L161" target="_blank">View Source</a>

## Summary

The result of listing files in storage.

## Signature

```ts
interface ListResult<T> {
  cursor?: string;
  files: (T extends { includeMetadata: true } ? FileMetadata : FileKey)[];
}

```

## Properties

### cursor

An opaque string that allows you to paginate over the keys in storage. Pass this back in the
`options` object on the next `list()` call to get the next page of results.

### files

A list of the files in storage.