---
title: writeFile
---

# writeFile

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fs/src/lib/fs.ts#L92" target="_blank">View Source</a>

## Summary

Writes a file-like object to the local filesystem and resolves when the stream is finished.

Accepts any object with a `stream()` method, including native `File`, `Blob`, and `LazyFile`.

[MDN `File` Reference](https://developer.mozilla.org/en-US/docs/Web/API/File)

## Signature

```ts
function writeFile(
  to: string | number | FileHandle,
  file: { stream: any },
): Promise<void>;

```

## Params

### to

The path to write the file to, or an open file descriptor

### file

The file to write (any object with a `stream()` method)

## Returns

A promise that resolves when the file is written