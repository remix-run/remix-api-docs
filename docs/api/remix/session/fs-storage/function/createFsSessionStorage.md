---
title: createFsSessionStorage
---

# createFsSessionStorage

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/session/src/lib/session-storage/fs.ts#L27" target="_blank">View Source</a>

## Summary

Creates a session storage that stores all session data in a filesystem directory using
Node's fs module.

Note: No attempt is made to avoid overwriting existing files, so the directory used should
be a new directory solely dedicated to this storage object.

## Signature

```ts
function createFsSessionStorage(
  directory: string,
  options: FsSessionStorageOptions,
): SessionStorage;

```

## Params

### directory

The directory to store the session files in

### options

(optional) The options for the session storage

## Returns

The session storage