---
title: maxLength
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/checks.ts#L26
---

# maxLength

## Summary

Require a string to be at most `length` characters long.

## Signature

```ts
function maxLength(length: number): Check<string>;

```

## Params

### `length`

The maximum number of characters

## Returns

A [`Check`](/api/remix/data-schema/type/Check/) that enforces the maximum length