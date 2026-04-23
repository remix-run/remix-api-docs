---
title: doesNotThrow
---

# doesNotThrow

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L255" target="_blank">View Source</a>

## Summary

Asserts that `fn` does **not** throw.

## Signature

```ts
function doesNotThrow(fn: () => any, message: string): void;

```

## Example

```ts
assert.doesNotThrow(() => JSON.parse('{}'))
```

## Params

### fn

The function expected not to throw.

### message

Optional failure message.