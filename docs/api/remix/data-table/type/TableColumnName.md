---
title: TableColumnName
---

# TableColumnName

## Summary

Unqualified column names for a concrete table.

## Signature

```ts
type TableColumnName<table> = keyof TableColumns<table> & string;

```