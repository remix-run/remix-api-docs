---
title: createMemorySessionStorage
source: https://github.com/remix-run/remix/blob/main/packages/session/src/lib/session-storage/memory.ts#L21
---

# createMemorySessionStorage

## Summary

Creates a session storage that stores all session data in memory.

Note: This is useful for testing and development. All session data is lost when the
server restarts.

## Signature

```ts
function createMemorySessionStorage(
  options: MemorySessionStorageOptions,
): SessionStorage;

```

## Parameters

### `options`

The options for the session storage

## Returns

The session storage