---
title: FsSessionStorageOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/session/src/lib/session-storage/fs.ts#L11
---

# FsSessionStorageOptions

## Summary

Options for filesystem-backed session storage.

## Signature

```ts
interface FsSessionStorageOptions {
  useUnknownIds?: boolean;
}

```

## Properties

### useUnknownIds

Whether to reuse session IDs sent from the client that are not found in storage.
Default is `false`.