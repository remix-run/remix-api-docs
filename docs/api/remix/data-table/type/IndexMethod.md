---
title: IndexMethod
---

# IndexMethod

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L286" target="_blank">View Source</a>

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