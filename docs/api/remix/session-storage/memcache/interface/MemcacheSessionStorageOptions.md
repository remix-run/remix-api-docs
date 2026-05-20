---
title: MemcacheSessionStorageOptions
---

# MemcacheSessionStorageOptions

## Summary

Options for Memcache-backed session storage.

## Signature

```ts
interface MemcacheSessionStorageOptions {
  keyPrefix?: string;
  ttlSeconds?: number;
  useUnknownIds?: boolean;
}

```

## Properties

### `keyPrefix`

Prefix prepended to all session keys in Memcache.
Default is `'remix:session:'`.

### `ttlSeconds`

Session TTL in seconds.
Default is `0` (never expire).

### `useUnknownIds`

Whether to reuse session IDs sent from the client that are not found in storage.
Default is `false`.