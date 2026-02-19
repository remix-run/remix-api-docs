---
title: WhereInput
---

# WhereInput

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L64" target="_blank">View Source</a>

## Summary

User-facing where input accepted by `query.where()` and relation modifiers.

## Signature

```ts
type WhereInput<column> = Predicate<column> | WhereObject<column>;

```