---
title: KeySelector
---

# KeySelector

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L535" target="_blank">View Source</a>

## Summary

Column or column list used to join relations.

## Signature

```ts
type KeySelector<table> =
  | (keyof TableRow<table> & string)
  | readonly (keyof TableRow<table> & string)[];

```