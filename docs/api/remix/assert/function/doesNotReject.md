---
title: doesNotReject
---

# doesNotReject

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/assert/src/lib/assert.ts#L315" target="_blank">View Source</a>

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

### fn

A function returning a promise.

### message

Optional failure message.