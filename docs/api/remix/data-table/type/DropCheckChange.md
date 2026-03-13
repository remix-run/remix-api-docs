---
title: DropCheckChange
---

# DropCheckChange

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L410" target="_blank">View Source</a>

## Summary

Alter-table change that drops a check constraint.

## Signature

```ts
type DropCheckChange = {
  kind: "dropCheck";
  name: string;
};

```