---
title: WhereInput
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/operators.ts#L67
---

# WhereInput

## Summary

User-facing where input accepted by `query.where()` and relation modifiers.

## Signature

```ts
type WhereInput<column> = Predicate<column> | WhereObject<column>;

```