---
title: fail
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/assert/src/lib/assert.ts#L425
---

# fail

## Summary

Unconditionally fails the test with an optional message.

## Signature

```ts
function fail(message: AssertionMessage): never

```

## Example

```ts
assert.fail('this branch should never be reached')

```

## Parameters

### `message`

Optional failure message.