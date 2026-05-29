---
title: doesNotThrow
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/assert/src/lib/assert.ts#L262
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