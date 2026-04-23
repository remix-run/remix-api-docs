---
title: fail
---

# fail

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L160" target="_blank">View Source</a>

## Summary

Unconditionally fails the test with an optional message.

## Signature

```ts
function fail(message: string): never;

```

## Example

```ts
assert.fail('this branch should never be reached')
```

## Params

### message

Optional failure message.