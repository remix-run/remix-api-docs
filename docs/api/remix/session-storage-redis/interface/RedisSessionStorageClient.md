---
title: RedisSessionStorageClient
---

# RedisSessionStorageClient

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/session-storage-redis/src/lib/redis-storage.ts#L9" target="_blank">View Source</a>

## Summary

Minimal Redis client contract required by createRedisSessionStorage.

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

### del(key: string): unknown

Deletes a stored session value.

#### key

### expire(key: string, ttlSeconds: number): unknown

Updates the TTL for an existing session value in seconds.

#### key

#### ttlSeconds

### get(key: string): string | Promise<string | null> | null

Reads a serialized session value.

#### key

### set(key: string, value: string): unknown

Stores a serialized session value.

#### key

#### value

### setEx(key: string, ttlSeconds: number, value: string): unknown

Stores a serialized session value with a TTL in seconds.

#### key

#### ttlSeconds

#### value