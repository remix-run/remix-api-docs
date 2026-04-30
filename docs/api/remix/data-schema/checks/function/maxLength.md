---
title: maxLength
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/checks.ts#L26
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