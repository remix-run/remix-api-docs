---
title: CreateIndexOperation
---

# CreateIndexOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L473" target="_blank">View Source</a>

## Summary

Operation that creates an index.

## Signature

```ts
type CreateIndexOperation = {
  ifNotExists?: boolean;
  index: IndexDefinition;
  kind: "createIndex";
};

```