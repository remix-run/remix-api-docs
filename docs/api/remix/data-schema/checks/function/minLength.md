---
title: minLength
---

# minLength

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/checks.ts#L9" target="_blank">View Source</a>

## Summary

Require a string to be at least `length` characters long.

## Signature

```ts
function minLength(length: number): Check<string>;

```

## Params

### length

The minimum number of characters

## Returns

A `Check` that enforces the minimum length