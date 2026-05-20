---
title: doesNotReject
---

# doesNotReject

## Summary

Asserts that the promise returned by `fn` does **not** reject.

## Signature

```ts
function doesNotReject(fn: () => Promise<any>, message: string): Promise<void>;

```

## Example

```ts
await assert.doesNotReject(() => fetch("/healthy"));

```

## Parameters

### `fn`

A function returning a promise.

### `message`

Optional failure message.