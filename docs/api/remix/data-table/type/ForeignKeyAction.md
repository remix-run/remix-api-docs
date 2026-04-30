---
title: ForeignKeyAction
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L160
---

# ForeignKeyAction

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