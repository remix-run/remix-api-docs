---
title: createRedisSessionStorage
---

# createRedisSessionStorage

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/session-storage-redis/src/lib/redis-storage.ts#L69" target="_blank">View Source</a>

## Summary

Creates a session storage backed by Redis.

## Signature

```ts
function createRedisSessionStorage(
  client: RedisSessionStorageClient,
  options: RedisSessionStorageOptions,
): SessionStorage;

```

## Params

### client

Redis client with get/set/del methods

### options

Session storage options

## Returns

The session storage