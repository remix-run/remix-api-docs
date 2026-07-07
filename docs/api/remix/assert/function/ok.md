---
title: ok
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L268
---

# ok

## Summary

Asserts that `value` is truthy. Narrows the type of `value` after the call.

## Signature

```ts
function ok(value: unknown, message: AssertionMessage): asserts value;

```

## Example

```ts
const cookie = getSessionCookie(response);
assert.ok(cookie); // cookie is now `string` (not `string | null`)

```

## Parameters

### `value`

The value to test for truthiness.

### `message`

Optional failure message.