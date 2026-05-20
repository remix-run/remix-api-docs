---
title: doesNotThrow
---

# doesNotThrow

## Summary

Asserts that `fn` does **not** throw.

## Signature

```ts
function doesNotThrow(fn: () => any, message: string): void;

```

## Example

```ts
assert.doesNotThrow(() => JSON.parse("{}"));

```

## Parameters

### `fn`

The function expected not to throw.

### `message`

Optional failure message.