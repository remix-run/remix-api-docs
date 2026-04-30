---
title: CreateIndexOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L473
---

# CreateIndexOperation

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