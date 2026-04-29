---
title: RedisSessionStorageOptions
---

# RedisSessionStorageOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/session-storage-redis/src/lib/redis-storage.ts#L39" target="_blank">View Source</a>

## Summary

Options for Redis-backed session storage created by createRedisSessionStorage.

## Signature

```ts
interface RedisSessionStorageOptions {
  keyPrefix?: string;
  ttl?: number;
  useUnknownIds?: boolean;
}

```

## Properties

### keyPrefix

Prefix for session keys in Redis.

### ttl

Session TTL in seconds. If set, the session key expires automatically.

### useUnknownIds

Whether to reuse session IDs sent from the client that are not found in storage.