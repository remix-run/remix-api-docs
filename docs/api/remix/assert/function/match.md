---
title: match
---

# match

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assert/src/lib/assert.ts#L177" target="_blank">View Source</a>

## Summary

Asserts that `string` matches the given `regexp`.

## Signature

```ts
function match(string: string, regexp: RegExp, message: string): void;

```

## Example

```ts
assert.match(html, /Welcome Back/)
```

## Params

### string

The string to test.

### regexp

The pattern to match against.

### message

Optional failure message.