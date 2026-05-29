---
title: createScheduler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/scheduler.ts#L53
---

# createScheduler

## Summary

Creates the DOM update scheduler used by the component runtime.

## Signature

```ts
function createScheduler(
  doc: Document,
  rootTarget: EventTarget,
  styles: StyleManager,
): Scheduler;

```

## Parameters

### `doc`

Document associated with the rendered tree.

### `rootTarget`

Event target that receives runtime errors.

### `styles`

Style manager used during reconciliation.

## Returns

A scheduler instance.