---
title: MemcacheSessionStorageOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/session-storage-memcache/src/lib/memcache-storage.ts#L13
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

### keyPrefix

Prefix prepended to all session keys in Memcache.
Default is `'remix:session:'`.

### ttlSeconds

Session TTL in seconds.
Default is `0` (never expire).

### useUnknownIds

Whether to reuse session IDs sent from the client that are not found in storage.
Default is `false`.