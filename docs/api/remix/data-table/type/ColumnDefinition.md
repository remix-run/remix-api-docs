---
title: ColumnDefinition
---

# ColumnDefinition

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L223" target="_blank">View Source</a>

## Summary

Normalized column definition used in schema operations.

## Signature

```ts
type ColumnDefinition = {
  autoIncrement?: boolean;
  charset?: string;
  checks?: ColumnCheck[];
  collate?: string;
  comment?: string;
  computed?: ColumnComputed;
  default?: ColumnDefault;
  enumValues?: string[];
  identity?: IdentityOptions;
  length?: number;
  nullable?: boolean;
  precision?: number;
  primaryKey?: boolean;
  references?: ColumnReference;
  scale?: number;
  type: ColumnTypeName;
  unique?: boolean | { name?: string };
  unsigned?: boolean;
  withTimezone?: boolean;
};

```