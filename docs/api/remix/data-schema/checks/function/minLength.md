---
title: minLength
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/checks.ts#L9
---

# minLength

## Summary

Require a string to be at least `length` characters long.

## Signature

```ts
function minLength(length: number): Check<string>;

```

## Params

### `length`

The minimum number of characters

## Returns

A [`Check`](/api/remix/data-schema/type/Check/) that enforces the minimum length