---
title: KeySelector
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