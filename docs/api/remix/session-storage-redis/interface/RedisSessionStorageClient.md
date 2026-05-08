---
title: RedisSessionStorageClient
source: https://github.com/remix-run/remix/blob/main/packages/session-storage-redis/src/lib/redis-storage.ts#L9
---

# RedisSessionStorageClient

## Summary

Minimal Redis client contract required by [`createRedisSessionStorage`](/api/remix/session-storage-redis/function/createRedisSessionStorage/).

## Signature

```ts
interface RedisSessionStorageClient {
  del(key: string): unknown;
  expire(key: string, ttlSeconds: number): unknown;
  get(key: string): string | Promise<string | null> | null;
  set(key: string, value: string): unknown;
  setEx(key: string, ttlSeconds: number, value: string): unknown;
}

```

## Methods

### `del(key: string): unknown`

Deletes a stored session value.



### `expire(key: string, ttlSeconds: number): unknown`

Updates the TTL for an existing session value in seconds.



### `get(key: string): string | Promise<string | null> | null`

Reads a serialized session value.



### `set(key: string, value: string): unknown`

Stores a serialized session value.



### `setEx(key: string, ttlSeconds: number, value: string): unknown`

Stores a serialized session value with a TTL in seconds.

