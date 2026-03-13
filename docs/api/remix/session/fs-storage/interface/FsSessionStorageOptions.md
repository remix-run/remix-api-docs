---
title: FsSessionStorageOptions
---

# FsSessionStorageOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/session/src/lib/session-storage/fs.ts#L11" target="_blank">View Source</a>

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