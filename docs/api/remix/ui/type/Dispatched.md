---
title: Dispatched
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/event-listeners.ts#L4
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