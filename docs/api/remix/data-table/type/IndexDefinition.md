---
title: IndexDefinition
---

# IndexDefinition

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L291" target="_blank">View Source</a>

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