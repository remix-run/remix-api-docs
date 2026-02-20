---
title: createMemorySessionStorage
---

# createMemorySessionStorage

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/session/src/lib/session-storage/memory.ts#L21" target="_blank">View Source</a>

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

## Params

### options

The options for the session storage

## Returns

The session storage