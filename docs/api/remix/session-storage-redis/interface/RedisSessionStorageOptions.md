---
title: RedisSessionStorageOptions
source: https://github.com/remix-run/remix/blob/main/packages/session-storage-redis/src/lib/redis-storage.ts#L39
---

# RedisSessionStorageOptions

## Summary

Options for Redis-backed session storage created by [`createRedisSessionStorage`](/api/remix/session-storage-redis/function/createRedisSessionStorage/).

## Signature

```ts
interface RedisSessionStorageOptions {
  keyPrefix?: string;
  ttl?: number;
  useUnknownIds?: boolean;
}

```

## Properties

### `keyPrefix`

Prefix for session keys in Redis.

### `ttl`

Session TTL in seconds. If set, the session key expires automatically.

### `useUnknownIds`

Whether to reuse session IDs sent from the client that are not found in storage.