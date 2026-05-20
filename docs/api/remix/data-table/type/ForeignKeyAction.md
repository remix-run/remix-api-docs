---
title: ForeignKeyAction
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