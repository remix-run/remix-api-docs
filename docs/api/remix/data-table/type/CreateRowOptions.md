---
title: CreateRowOptions
---

# CreateRowOptions

## Summary

Options for create operations that return the inserted row.

## Signature

```ts
type CreateRowOptions<table, relations> = {
  returnRow: true;
  touch?: boolean;
  with?: relations;
};

```