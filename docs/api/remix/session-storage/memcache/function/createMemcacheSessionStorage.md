---
title: createMemcacheSessionStorage
---

# createMemcacheSessionStorage

## Summary

Creates a session storage that stores all session data in Memcache.

Note: This storage requires a Node.js runtime with TCP socket support.

## Signature

```ts
function createMemcacheSessionStorage(
  server: string,
  options: MemcacheSessionStorageOptions,
): SessionStorage;

```

## Parameters

### `server`

The Memcache server in `host:port` format

### `options`

(optional) The options for the session storage

## Returns

The session storage