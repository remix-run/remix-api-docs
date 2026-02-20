---
title: createSession
---

# createSession

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/session/src/lib/session.ts#L185" target="_blank">View Source</a>

## Summary

Create a new session.

## Signature

```ts
function createSession(
  id: string,
  initialData: SessionData<valueData, flashData>,
): Session<valueData, flashData>;

```

## Params

### id

The ID of the session

### initialData

The initial data for the session

## Returns

The new session