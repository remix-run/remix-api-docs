---
title: doesNotMatch
---

# doesNotMatch

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/assert/src/lib/assert.ts#L198" target="_blank">View Source</a>

## Summary

Asserts that `string` does **not** match the given `regexp`.

## Signature

```ts
function doesNotMatch(string: string, regexp: RegExp, message: string): void;

```

## Example

```ts
assert.doesNotMatch(html, /Error/)
```

## Params

### string

The string to test.

### regexp

The pattern that must not match.

### message

Optional failure message.