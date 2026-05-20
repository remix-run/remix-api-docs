---
title: minLength
---

# minLength

## Summary

Require a string to be at least `length` characters long.

## Signature

```ts
function minLength(length: number): Check<string>;

```

## Parameters

### `length`

The minimum number of characters

## Returns

A [`Check`](/api/remix/data-schema/type/Check/) that enforces the minimum length