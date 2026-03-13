---
title: DropUniqueChange
---

# DropUniqueChange

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L378" target="_blank">View Source</a>

## Summary

Alter-table change that drops a unique constraint.

## Signature

```ts
type DropUniqueChange = {
  kind: "dropUnique";
  name: string;
};

```