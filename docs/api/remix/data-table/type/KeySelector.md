---
title: KeySelector
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L535
---

# KeySelector

## Summary

Column or column list used to join relations.

## Signature

```ts
type KeySelector<table> =
  | (keyof TableRow<table> & string)
  | readonly (keyof TableRow<table> & string)[];

```