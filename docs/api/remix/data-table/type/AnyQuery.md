---
title: AnyQuery
---

# AnyQuery

## Summary

Convenience alias for any [`Query`](/api/remix/data-table/class/Query/) regardless of its source, columns,
row shape, loaded relations, or execution phase. Use this in helper APIs
that accept a query but don't care about the specific generic parameters.

## Signature

```ts
type AnyQuery = Query<any, any, any, any, any>;

```