---
title: Session
---

# Session

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/session/src/lib/session.ts#L11" target="_blank">View Source</a>

## Summary

A session persists data for a specific user across multiple requests to a server.

## Signature

```ts
class Session<valueData, flashData> {
  constructor(
    id: string,
    initialData: SessionData<valueData, flashData>,
  ): Session<valueData, flashData>;

  // Accessors
  get data(): SessionData<valueData, flashData>;
  get deleteId(): string | undefined;
  get destroyed(): boolean;
  get dirty(): boolean;
  get id(): string;
  get size(): number;

  // Methods
  destroy(): void;
  flash<key extends string | number | symbol>(
    key: key,
    value: flashData[key],
  ): void;
  get<key extends string | number | symbol>(
    key: key,
  ): valueData[key] | undefined;
  get<key extends string | number | symbol>(
    key: key,
  ): flashData[key] | undefined;
  get(key: string): undefined;
  has(key: keyof valueData | keyof flashData): boolean;
  regenerateId(deleteOldSession: boolean): void;
  set<key extends string | number | symbol>(
    key: key,
    value: valueData[key],
  ): void;
  unset(key: keyof valueData): void;
}

```

## Constructor Params

### id

The session ID

### initialData

The initial session data

## Accessors

### data

The raw session data in a format suitable for storage.

Note: Do not use this for normal reading of session data. Use the `get` method instead.

### deleteId

The session ID that will be deleted when the session is saved. This is set to the original
session ID when the session ID is regenerated with the `deleteOldSession` option.

### destroyed

Whether this session has been destroyed.

### dirty

Whether this session has been modified since it was created.

### id

The unique identifier for this session.

### size

The number of key/value pairs in the session.

## Methods

### destroy(): void

Mark this session as destroyed.

This prevents all further modifications to the session.

### flash<key extends string | number | symbol>(key: key, value: flashData[key]): void

Set a value in the session that will be available only during the next request.

#### key

#### value

The value to flash

### get<key extends string | number | symbol>(key: key): valueData[key] | undefined

Get a value from the session.

#### key

### get<key extends string | number | symbol>(key: key): flashData[key] | undefined

Get a value from the session.

#### key

### get(key: string): undefined

Get a value from the session.

#### key

The key of the value to get

### has(key: keyof valueData | keyof flashData): boolean

Check if a value is stored for the given key.

#### key

The key to check

### regenerateId(deleteOldSession: boolean): void

Regenerate the session ID while preserving the session data. This should be called after login
or other privilege changes.

#### deleteOldSession

Whether to delete the old session data when the session is saved (default: `false`)

### set<key extends string | number | symbol>(key: key, value: valueData[key]): void

Set a value in the session.

#### key

#### value

The value to set

### unset(key: keyof valueData): void

Remove a value from the session.

#### key

The key of the value to remove