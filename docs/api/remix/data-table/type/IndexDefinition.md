---
title: IndexDefinition
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L291
---

# IndexDefinition

## Summary

Index definition used in schema operations.

## Signature

```ts
type IndexDefinition = {
  columns: string[];
  name: string;
  table: TableRef;
  unique?: boolean;
  using?: IndexMethod;
  where?: string;
};

```