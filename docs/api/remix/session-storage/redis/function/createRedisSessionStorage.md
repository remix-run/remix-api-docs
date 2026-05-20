---
title: createRedisSessionStorage
---

# createRedisSessionStorage

## Summary

Creates a session storage backed by Redis.

## Signature

```ts
function createRedisSessionStorage(
  client: RedisSessionStorageClient,
  options: RedisSessionStorageOptions,
): SessionStorage;

```

## Parameters

### `client`

Redis client with get/set/del methods

### `options`

Session storage options

## Returns

The session storage