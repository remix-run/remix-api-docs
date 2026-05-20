---
title: ValidationIssue
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