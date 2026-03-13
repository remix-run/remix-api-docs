---
title: Dispatched
---

# Dispatched

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/event-listeners.ts#L4" target="_blank">View Source</a>

## Summary

Event type with `currentTarget` narrowed to the dispatched target.

## Signature

```ts
type Dispatched<event, target> = Omit<event, "currentTarget"> & {
  currentTarget: target;
};

```