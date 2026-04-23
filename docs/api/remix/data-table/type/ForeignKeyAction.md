---
title: ForeignKeyAction
---

# ForeignKeyAction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L160" target="_blank">View Source</a>

## Summary

Referential actions supported by foreign key constraints.

## Signature

```ts
type ForeignKeyAction =
  | "cascade"
  | "restrict"
  | "set null"
  | "set default"
  | "no action";

```