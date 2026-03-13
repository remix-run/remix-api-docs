---
title: DropIndexOperation
---

# DropIndexOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L482" target="_blank">View Source</a>

## Summary

Operation that drops an index.

## Signature

```ts
type DropIndexOperation = {
  ifExists?: boolean;
  kind: "dropIndex";
  name: string;
  table: TableRef;
};

```