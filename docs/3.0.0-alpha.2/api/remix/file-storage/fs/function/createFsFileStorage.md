---
title: createFsFileStorage
---

# createFsFileStorage

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/file-storage/src/lib/backends/fs.ts#L24" target="_blank">View Source</a>

## Summary

Creates a `FileStorage` that is backed by a filesystem directory using node:fs.

Important: No attempt is made to avoid overwriting existing files, so the directory used should
be a new directory solely dedicated to this storage object.

Note: Keys have no correlation to file names on disk, so they may be any string including
characters that are not valid in file names. Additionally, individual `File` names have no
correlation to names of files on disk, so multiple files with the same name may be stored in the
same storage object.

## Signature

```ts
function createFsFileStorage(directory: string): FileStorage;

```

## Params

### directory

The directory where files are stored

## Returns

A new file storage backed by a filesystem directory