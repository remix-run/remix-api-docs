---
title: ValidationIssue
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L37
---

# ValidationIssue

## Summary

Single validation issue reported by table hooks.

## Signature

```ts
type ValidationIssue = {
  message: string;
  path?: (string | number)[];
};

```