---
title: IndexMethod
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L286
---

# IndexMethod

## Summary

Index method used when creating an index.

## Signature

```ts
type IndexMethod =
  | "btree"
  | "hash"
  | "gin"
  | "gist"
  | "fulltext"
  | (string & {});

```