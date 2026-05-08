---
title: doesNotMatch
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/assert.ts#L202
---

# doesNotMatch

## Summary

Asserts that `string` does **not** match the given `regexp`.

## Signature

```ts
function doesNotMatch(string: string, regexp: RegExp, message: string): void;

```

## Example

```ts
assert.doesNotMatch(html, /Error/);

```

## Parameters

### `string`

The string to test.

### `regexp`

The pattern that must not match.

### `message`

Optional failure message.