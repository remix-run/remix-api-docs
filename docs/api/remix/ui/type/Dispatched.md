---
title: Dispatched
---

# Dispatched

## Summary

Event type with `currentTarget` narrowed to the dispatched target.

## Signature

```ts
type Dispatched<event, target> = Omit<event, "currentTarget"> & {
  currentTarget: target;
};

```