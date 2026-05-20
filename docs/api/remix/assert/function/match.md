---
title: match
---

# match

## Summary

Asserts that `string` matches the given `regexp`.

## Signature

```ts
function match(string: string, regexp: RegExp, message: string): void;

```

## Example

```ts
assert.match(html, /Welcome Back/);

```

## Parameters

### `string`

The string to test.

### `regexp`

The pattern to match against.

### `message`

Optional failure message.