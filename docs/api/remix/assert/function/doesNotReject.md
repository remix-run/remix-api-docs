---
title: doesNotReject
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L323
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
await assert.doesNotReject(() => fetch('/healthy'))
```

## Params

### `fn`

A function returning a promise.

### `message`

Optional failure message.