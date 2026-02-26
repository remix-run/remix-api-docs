---
title: date
---

# date

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/coerce.ts#L89" target="_blank">View Source</a>

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