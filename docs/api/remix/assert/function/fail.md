---
title: fail
---

# fail

## Summary

Unconditionally fails the test with an optional message.

## Signature

```ts
function fail(message: string): never;

```

## Example

```ts
assert.fail("this branch should never be reached");

```

## Parameters

### `message`

Optional failure message.