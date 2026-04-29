---
title: ok
---

# ok

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/assert/src/lib/assert.ts#L56" target="_blank">View Source</a>

## Summary

Asserts that `value` is truthy. Narrows the type of `value` after the call.

## Signature

```ts
function ok(value: unknown, message: string): asserts value;

```

## Example

```ts
const cookie = getSessionCookie(response)
assert.ok(cookie) // cookie is now `string` (not `string | null`)
```

## Params

### value

The value to test for truthiness.

### message

Optional failure message.