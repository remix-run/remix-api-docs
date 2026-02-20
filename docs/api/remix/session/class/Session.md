---
title: Session
---

# Session

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/session/src/lib/session.ts#L11" target="_blank">View Source</a>

## Summary

A session persists data for a specific user across multiple requests to a server.

## Constructor

### id

The session ID

### initialData

The initial session data

## Properties

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

### flash(key: key, value: flashData[key]): void

Set a value in the session that will be available only during the next request.

#### key

#### value

The value to flash

### get(key: key): valueData[key] | undefined

Get a value from the session.

#### key

### has(key: keyof valueData | keyof flashData): boolean

Check if a value is stored for the given key.

#### key

The key to check

### regenerateId(deleteOldSession: boolean): void

Regenerate the session ID while preserving the session data. This should be called after login
or other privilege changes.

#### deleteOldSession

Whether to delete the old session data when the session is saved (default: `false`)

### set(key: key, value: valueData[key]): void

Set a value in the session.

#### key

#### value

The value to set

### unset(key: keyof valueData): void

Remove a value from the session.

#### key

The key of the value to remove