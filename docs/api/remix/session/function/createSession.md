---
title: createSession
source: https://github.com/remix-run/remix/blob/main/packages/session/src/lib/session.ts#L185
---

# createSession

## Summary

Create a new session.

## Signature

```ts
function createSession<valueData extends Data, flashData extends Data>(
  id: string,
  initialData: SessionData<valueData, flashData>,
): Session<valueData, flashData>;

```

## Parameters

### `id`

The ID of the session

### `initialData`

The initial data for the session

## Returns

The new session