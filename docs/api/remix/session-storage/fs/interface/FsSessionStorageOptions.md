---
title: FsSessionStorageOptions
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

### `useUnknownIds`

Whether to reuse session IDs sent from the client that are not found in storage.
Default is `false`.