---
title: date
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/coerce.ts#L89
---

# date

## Summary

Coerce input into a `Date`.

Accepts:
- valid `Date` instances
- date strings supported by `new Date(value)`

## Signature

```ts
function date(): Schema<unknown, Date>;

```

## Returns

A schema that produces a `Date`